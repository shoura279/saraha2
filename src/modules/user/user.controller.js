import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
import { AppError } from "../../utils/appError.js";
import { User } from "../../../db/models/user.model.js"
import { sendMail } from "../../utils/email.js"
import { messages } from "../../utils/constant/messages.js";
export const signUp = async (req, res, next) => {
  const { userName, email, password } = req.body
  const userExist = await User.findOne({ email })
  if (userExist && userExist.verified) { return next(new AppError(messages.user.alreadyExist, 409)) }
  if (userExist && userExist.verified == false && userExist.expireOtp > Date.now()) {
    return next(new AppError('check your email', 400))
  }
  if (userExist && userExist.verified == false && userExist.expireOtp < Date.now()) {
    const OTP = Math.floor(100000 + Math.random() * 900000)
    userExist.OTP = OTP
    userExist.expireOtp = Date.now() + 500000
    await userExist.save()
    sendMail(email, "User Registration OTP", OTP)
  }
  const hashPassword = await bcrypt.hash(password, 10)
  const OTP = Math.floor(100000 + Math.random() * 900000)
  const userCreated = await User.create({ userName, email, password: hashPassword, OTP, expireOtp: Date.now() + 500000 })
  if (!userCreated) return next(new AppError(messages.user.failedToCreate, 500))
  sendMail(email, "User Registration OTP", OTP)

  res.status(201).json({
    message: "user created successfully",
    success: true,
    data: userCreated

  })
}




export const login = async (req, res, next) => {
  // get data
  const { email, password } = req.body;

  // check existence
  const isUserExist = await User.findOne({ email, verified: true });
  if (!isUserExist) {
    return next(new AppError('invalid credentials', 401))
  }
  const isPassword = bcrypt.compareSync(password, isUserExist.password)
  if (!isPassword) {
    return next(new AppError("invalid credentials", 401));
  }
  const token = jwt.sign({ userId: isUserExist._id }, 'secret_key')
  isUserExist.status = "online"
  await isUserExist.save()
  return res.status(200).json({ message: `welcome to your profile`, success: true, token });
}

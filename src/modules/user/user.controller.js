import { User } from "../../../db/models/user.model.js"
import bcrypt from 'bcrypt'
import { sendMail } from "../../utils/email.js"
const signUp = async (req, res, next) => {
    const { userName, email, password } = req.body
    const hashPassword = await bcrypt.hash(password, 10)
    const OTP = Math.floor(100000 + Math.random() * 900000)
    sendMail(email,"User Registration OTP",OTP)
    const user = await User.create({ userName, email,password: hashPassword, OTP })

    res.status(201).json({
        status: 'success',
        data: {
            user
        }
    })
}

export { signUp }
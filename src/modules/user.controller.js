import jwt from "jsonwebtoken";
import { User } from "../../db/models/user.model.js";
import { AppError } from "../utils/appError.js";
import bcrypt from 'bcrypt'

export const login = async (req, res, next)=>{
    // get data
    const {email, password} = req.body;
 
    // check existence
    const isUserExist = await User.findOne({email})
    if(!isUserExist){
        return next(new AppError('invalid credentials', 401 ))
    }
    const isPassword = bcrypt.compareSync( password, isUserExist.password)
    if(!isPassword){
        return next(new AppError("invalid credentials", 401));
    }
    const token = jwt.sign({userId:_id}, 'secret_key')
    if(isUserExist && isPassword){
        isUserExist.status = "online"
    }
  return res.status(200).json({ message: `welcome to your profile`, success:true , token});
}
import mongoose, { model } from "mongoose";
//schema
const userSchema = new mongoose.Schema({
    userName :{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    OTP:{
        type:String,
    }
},{
    timestamps:true
})

//model
export const User = model('User',userSchema)
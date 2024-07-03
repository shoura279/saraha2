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
        type:Number,
    },
    status:{
        type:String,
        default:"offline"
    }
},{
    timestamps:true
})

//model
export const User = model('User',userSchema)
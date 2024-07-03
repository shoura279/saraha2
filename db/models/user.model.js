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
    }
},{
    timestamps:true
})

//model
const User = model('User',userSchema)
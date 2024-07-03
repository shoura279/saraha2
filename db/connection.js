import mongoose from "mongoose";


export const dbConnection = ()=>{
    
mongoose.connect('mongodb://127.0.0.1:27017/sarah2').then(()=>{
    console.log('CONNECTION successfully');
})
};


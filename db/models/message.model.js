// import modules
import mongoose, { Schema, model } from "mongoose";
// schema
const messageSchema = new Schema({
  content: String,
  receiverId: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }
})
// MODEL
export const Message = model('Message', messageSchema)
// import Message from '../../../db/model/message.js'
import { User } from '../../../db/models/user.model.js'

import { Message } from "../../../db/models/message.model.js"

export const addMessage = async (req, res, next) => {
  const { recieverId, content } = req.body
  try {
    const user = await User.findById(recieverId)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    const newMessage = new Message({ recieverId, content })
    await newMessage.save()

    res.status(201).json({ message: 'message sent successfully', success: true })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error })
  }
}

export const getAllMessages = async (req, res, next) => {

  const messages = await Message.find({ recieverId: req.authUser._id })
  res.status(201).json({ data: messages, success: true })

}


export const deleteMessage = async (req, res, next) => {
  const { id } = req.params
  const message = await Message.findOneAndDelete({ _id: id, recieverId: req.authUser._id })
  if (!message) {
    return res.status(404).json({ message: 'Message not found' })
  }
  res.status(200).json({ message: 'Message deleted successfully' })

}
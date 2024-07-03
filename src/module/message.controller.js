import Message from '../models/message.js'
import User from '../models/user.js'

export const addMessage = async (req, res,next) => {
    const { recieverId, content } = req.body
    try {
        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        const newMessage = new Message({ recieverId, content })
        await newMessage.save()

        res.status(201).json(newMessage)
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error })
    }
}

export const  getAllMessages = async(req,res, next)=> {
    try {
        const messages = await Message.find({recieverId:req.authUser._id})
        res.status(201).json(messages) 
    }catch( error ){   
        res.status(500).json({ message: 'Something went wrong', error })
}}


export const deleteMessage = async(req,res,next)=>{
        const { id } = req.params
      
        try {
          const message = await Message.findByIdAndDelete(id)
          
          if (!message) {
            return res.status(404).json({ message: 'Message not found' })
          }
      
          res.status(200).json({ message: 'Message deleted successfully' })
        } catch (error) {
          res.status(500).json({ message: 'Something went wrong', error })
        }
      }
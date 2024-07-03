import Message from '../models/message.js'
import User from '../models/user.js'

export const addMessage = async (req, res) => {
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
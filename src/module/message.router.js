import express from 'express'
import { addMessage, getAllMessages } from './message.controller.js'
import { auth } from '../middleware/authentication.js';


const router = express.Router()

// Add new message
router.post('/messages', addMessage);
router.get('/messages', auth, getAllMessages)
router.delete('/messages', auth, deleteMessage)
export default router;
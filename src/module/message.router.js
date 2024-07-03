import express from 'express'
import { addMessage } from './message.controller.js'


const router = express.Router()

// Add new message
router.post('/messages', addMessage);

export default router;
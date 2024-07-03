import express from 'express'
import { addMessage, deleteMessage, getAllMessages } from './message.controller.js'
import { auth } from '../../middleware/authentication.js';
import { asyncHandler } from '../../middleware/asyncHandler.js';


const router = express.Router()

// Add new message
router.post('/messages', asyncHandler(addMessage));
router.get('/messages', auth, asyncHandler(getAllMessages))
router.delete('/messages', auth, asyncHandler(deleteMessage))
export default router;
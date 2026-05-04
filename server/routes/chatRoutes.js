import express from 'express';
import { chatWithAI } from '../controllers/chatController.js';
import { saveChat, getChatHistory, getChatById, deleteChat } from '../controllers/chatHistoryController.js';
import { verifyToken } from '../middleware/verifyUser.js';

const router = express.Router();

router.post('/send', verifyToken, chatWithAI);
router.post('/save', verifyToken, saveChat);
router.get('/history', verifyToken, getChatHistory);
router.get('/:id', verifyToken, getChatById);
router.delete('/:id', verifyToken, deleteChat);

export default router;

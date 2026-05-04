import Chat from '../models/Chat.js';
import { errorHandler } from '../middleware/error.js';

export const saveChat = async (req, res, next) => {
    const { chatId, messages, title } = req.body;
    const userId = req.user.id;

    if (!messages || messages.length === 0) {
        return next(errorHandler(400, 'Messages are required'));
    }

    try {
        let chat;
        if (chatId) {
            // Update existing chat
            chat = await Chat.findOneAndUpdate(
                { _id: chatId, userId },
                { messages },
                { returnDocument: 'after' }
            );
        } else {
            // Create new chat
            chat = new Chat({
                userId,
                title: title || messages[0].content.substring(0, 30) + "...",
                messages
            });
            await chat.save();
        }
        res.status(200).json(chat);
    } catch (error) {
        next(error);
    }
};

export const getChatHistory = async (req, res, next) => {
    try {
        const chats = await Chat.find({ userId: req.user.id }).sort({ updatedAt: -1 });
        res.status(200).json(chats);
    } catch (error) {
        next(error);
    }
};

export const getChatById = async (req, res, next) => {
    try {
        const chat = await Chat.findOne({ _id: req.params.id, userId: req.user.id });
        if (!chat) {
            return next(errorHandler(404, 'Chat not found'));
        }
        res.status(200).json(chat);
    } catch (error) {
        next(error);
    }
};

export const deleteChat = async (req, res, next) => {
    try {
        const chat = await Chat.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
        if (!chat) {
            return next(errorHandler(404, 'Chat not found'));
        }
        res.status(200).json({ message: 'Chat deleted successfully' });
    } catch (error) {
        next(error);
    }
};

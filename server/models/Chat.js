import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    messages: [
        {
            role: { type: String, required: true },
            content: { type: String, required: true },
            image: { type: String },
            timestamp: { type: Date, default: Date.now }
        }
    ]
}, { timestamps: true });

const Chat = mongoose.model('Chat', chatSchema);

export default Chat;

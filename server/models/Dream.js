import mongoose from 'mongoose';

const consultationSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    topic: {
        type: String, // e.g. 'Diabetes', 'Hypertension'
    },
    explanation: {
        type: String, // The AI-generated educational explanation
    },
    treatmentInfo: {
        type: String, // Treatment notes / overview
    },
}, { timestamps: true });

const Dream = mongoose.model('Dream', consultationSchema);

export default Dream;

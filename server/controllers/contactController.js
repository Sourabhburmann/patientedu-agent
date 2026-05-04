import Contact from '../models/Contact.js';
import { errorHandler } from '../middleware/error.js';

export const submitContactForm = async (req, res, next) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return next(errorHandler(400, 'All fields are required'));
    }

    try {
        const newContact = new Contact({
            name,
            email,
            subject,
            message
        });

        await newContact.save();

        res.status(201).json({
            success: true,
            message: 'Message sent successfully! We will get back to you soon.'
        });
    } catch (error) {
        next(error);
    }
};

import Dream from '../models/Dream.js';
import { errorHandler } from '../middleware/error.js';

export const createDream = async (req, res, next) => {
    const { title, description, imageUrl, emotion, interpretation, realityScore } = req.body;
    
    if (!title || !description) {
        return next(errorHandler(400, 'Title and description are required'));
    }

    const newDream = new Dream({
        userId: req.user.id,
        title,
        description,
        imageUrl,
        emotion,
        interpretation,
        realityScore
    });

    try {
        const savedDream = await newDream.save();
        res.status(201).json(savedDream);
    } catch (error) {
        next(error);
    }
};

export const getDreams = async (req, res, next) => {
    try {
        const dreams = await Dream.find({ userId: req.user.id }).sort({ createdAt: -1 });
        res.status(200).json(dreams);
    } catch (error) {
        next(error);
    }
};

export const deleteDream = async (req, res, next) => {
    try {
        const dream = await Dream.findById(req.params.dreamId);
        if (!dream) {
            return next(errorHandler(404, 'Dream not found'));
        }
        if (dream.userId !== req.user.id) {
            return next(errorHandler(403, 'You are not allowed to delete this dream'));
        }
        await Dream.findByIdAndDelete(req.params.dreamId);
        res.status(200).json('Dream has been deleted');
    } catch (error) {
        next(error);
    }
};

export const updateDream = async (req, res, next) => {
    try {
        const dream = await Dream.findById(req.params.dreamId);
        if (!dream) {
            return next(errorHandler(404, 'Dream not found'));
        }
        if (dream.userId !== req.user.id) {
            return next(errorHandler(403, 'You are not allowed to update this dream'));
        }
        
        const updatedDream = await Dream.findByIdAndUpdate(
            req.params.dreamId,
            {
                $set: {
                    title: req.body.title,
                }
            },
            { returnDocument: 'after' }
        );
        res.status(200).json(updatedDream);
    } catch (error) {
        next(error);
    }
};

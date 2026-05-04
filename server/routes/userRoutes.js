import express from 'express';
import { verifyToken } from '../middleware/verifyUser.js';
import User from '../models/User.js';
import { errorHandler } from '../middleware/error.js';

const router = express.Router();

router.get('/profile', verifyToken, async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) return next(errorHandler(404, 'User not found'));
        const { password, ...rest } = user._doc;
        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
});

export default router;

import express from 'express';
import { signUp, login } from '../controllers/authController.js'; // Add .js extension
import checkAuth from '../middlewares/authMiddleware.js'; // Add .js extension

const router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);
router.get('/profile', checkAuth, (req, res) => {
  res.status(200).json({ message: 'Welcome to your profile', user: req.user });
});

export default router;

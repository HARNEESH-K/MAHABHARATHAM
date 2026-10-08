const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const {
  getAllParvas,
  getParvaById,
  createParva,
  updateParva,
  deleteParva
} = require('../controllers/parvaController');
const { getQuestionsByParva } = require('../controllers/questionController');
const { getVideosByParva } = require('../controllers/videoController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

// Optional auth helper: decodes user if token provided, but doesn't block if not
const optionalAuth = async (req, res, next) => {
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const secret = process.env.JWT_SECRET || 'kurukshetra_dharma_divine_secret_key_2026_quest_token';
      const decoded = jwt.verify(token, secret);
      req.user = await User.findById(decoded.id);
    } catch (err) {
      // ignore invalid token for optional auth
    }
  }
  next();
};

router.route('/')
  .get(optionalAuth, getAllParvas)
  .post(protect, adminOnly, createParva);

router.route('/:id')
  .get(optionalAuth, getParvaById)
  .put(protect, adminOnly, updateParva)
  .delete(protect, adminOnly, deleteParva);

// Nested routes specified in prompt (Section 11 & 22)
router.get('/:id/questions', optionalAuth, getQuestionsByParva);
router.get('/:id/videos', optionalAuth, getVideosByParva);

module.exports = router;

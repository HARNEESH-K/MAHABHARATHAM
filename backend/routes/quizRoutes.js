const express = require('express');
const router = express.Router();
const {
  startQuiz,
  submitQuiz,
  getQuizHistory,
  getRandomQuiz,
  getFinalChallenge
} = require('../controllers/quizController');
const { protect } = require('../middleware/authMiddleware');

router.post('/start', startQuiz);
router.post('/submit', protect, submitQuiz);
router.get('/history', protect, getQuizHistory);
router.get('/random', getRandomQuiz);
router.get('/final-challenge', protect, getFinalChallenge);

module.exports = router;

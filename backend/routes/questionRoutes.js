const express = require('express');
const router = express.Router();
const {
  getAllQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion
} = require('../controllers/questionController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

router.route('/')
  .get(protect, adminOnly, getAllQuestions)
  .post(protect, adminOnly, createQuestion);

router.route('/:id')
  .put(protect, adminOnly, updateQuestion)
  .delete(protect, adminOnly, deleteQuestion);

module.exports = router;

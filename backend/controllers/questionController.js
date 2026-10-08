const { Question, Parva } = require('../models');

// @desc Get questions for a specific Parva
// @route GET /api/parvas/:id/questions
exports.getQuestionsByParva = async (req, res, next) => {
  try {
    const { id } = req.params;
    let parvaNumber;

    if (!isNaN(id)) {
      parvaNumber = parseInt(id);
    } else {
      const parva = await Parva.findById(id);
      if (!parva) {
        return res.status(404).json({
          success: false,
          message: 'Parva not found.'
        });
      }
      parvaNumber = parva.number;
    }

    const questions = await Question.find({ parvaNumber });

    // Optional: limit to 10 questions per quiz session if bank has more
    const shuffled = [...questions].sort(() => 0.5 - Math.random()).slice(0, 10);

    return res.status(200).json({
      success: true,
      count: shuffled.length,
      parvaNumber,
      data: shuffled
    });
  } catch (error) {
    next(error);
  }
};

// @desc Get all questions (Admin list with optional parva filtering)
// @route GET /api/questions
exports.getAllQuestions = async (req, res, next) => {
  try {
    const { parvaNumber, difficulty } = req.query;
    const filter = {};
    if (parvaNumber) filter.parvaNumber = parseInt(parvaNumber);
    if (difficulty) filter.difficulty = difficulty;

    const questions = await Question.find(filter);
    return res.status(200).json({
      success: true,
      count: questions.length,
      data: questions
    });
  } catch (error) {
    next(error);
  }
};

// @desc Create question (Admin only)
// @route POST /api/questions
exports.createQuestion = async (req, res, next) => {
  try {
    const { parvaNumber, question, type, options, correctAnswer, explanation, difficulty, points } = req.body;

    if (!parvaNumber || !question || !options || !correctAnswer) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required question fields.'
      });
    }

    const parva = await Parva.findOne({ number: parseInt(parvaNumber) });
    const parvaId = parva ? (parva._id || parva.id) : parvaNumber;

    const newQuestion = await Question.create({
      parvaId,
      parvaNumber: parseInt(parvaNumber),
      question,
      type: type || 'mcq',
      options,
      correctAnswer,
      explanation: explanation || 'No explanation provided.',
      difficulty: difficulty || 'medium',
      points: points || 10
    });

    return res.status(201).json({
      success: true,
      message: 'Question created successfully.',
      data: newQuestion
    });
  } catch (error) {
    next(error);
  }
};

// @desc Update question (Admin only)
// @route PUT /api/questions/:id
exports.updateQuestion = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Question.findByIdAndUpdate(id, { $set: req.body });
    if (!updated) {
      return res.status(404).json({
        success: false,
        message: 'Question not found.'
      });
    }
    return res.status(200).json({
      success: true,
      message: 'Question updated successfully.',
      data: updated
    });
  } catch (error) {
    next(error);
  }
};

// @desc Delete question (Admin only)
// @route DELETE /api/questions/:id
exports.deleteQuestion = async (req, res, next) => {
  try {
    const { id } = req.params;
    const removed = await Question.findByIdAndDelete(id);
    if (!removed) {
      return res.status(404).json({
        success: false,
        message: 'Question not found.'
      });
    }
    return res.status(200).json({
      success: true,
      message: 'Question deleted successfully.'
    });
  } catch (error) {
    next(error);
  }
};

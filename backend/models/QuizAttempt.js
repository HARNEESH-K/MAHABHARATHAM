const mongoose = require('mongoose');

const quizAttemptSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  parvaId: {
    type: mongoose.Schema.Types.Mixed
  },
  parvaNumber: {
    type: Number
  },
  parvaName: {
    type: String
  },
  score: {
    type: Number,
    required: true,
    default: 0
  },
  totalQuestions: {
    type: Number,
    required: true
  },
  correctAnswers: {
    type: Number,
    required: true
  },
  accuracy: {
    type: Number,
    required: true
  },
  timeTaken: {
    type: Number, // in seconds
    default: 0
  },
  mode: {
    type: String,
    enum: ['parva', 'random', 'final_challenge'],
    default: 'parva'
  },
  answers: [{
    questionId: mongoose.Schema.Types.Mixed,
    questionText: String,
    selectedAnswer: String,
    correctAnswer: String,
    isCorrect: Boolean,
    explanation: String
  }],
  completedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.models.QuizAttempt || mongoose.model('QuizAttempt', quizAttemptSchema);

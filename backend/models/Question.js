const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  parvaId: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  parvaNumber: {
    type: Number,
    required: true,
    min: 1,
    max: 18
  },
  question: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    enum: ['mcq', 'true_false', 'character_id', 'event_id', 'timeline', 'wisdom'],
    default: 'mcq'
  },
  options: [{
    type: String,
    required: true
  }],
  correctAnswer: {
    type: String,
    required: true
  },
  explanation: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'medium'
  },
  points: {
    type: Number,
    default: 10
  }
}, {
  timestamps: true
});

module.exports = mongoose.models.Question || mongoose.model('Question', questionSchema);

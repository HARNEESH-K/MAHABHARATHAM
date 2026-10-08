const mongoose = require('mongoose');

const parvaSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
    unique: true,
    min: 1,
    max: 18
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  sanskritName: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  storySummary: {
    type: String,
    required: true
  },
  keyLessons: [{
    title: String,
    description: String
  }],
  importantCharacters: [{
    name: String,
    role: String,
    description: String,
    icon: String
  }],
  importantEvents: [{
    title: String,
    description: String,
    significance: String
  }],
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    default: 'Medium'
  },
  pointsReward: {
    type: Number,
    default: 150
  },
  quote: {
    text: String,
    speaker: String
  },
  theme: {
    color: String,
    symbol: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.models.Parva || mongoose.model('Parva', parvaSchema);

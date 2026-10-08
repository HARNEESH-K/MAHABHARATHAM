const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: 'Award'
  },
  badgeColor: {
    type: String,
    default: '#d4af37'
  },
  requirementType: {
    type: String,
    enum: ['parva_count', 'score_threshold', 'accuracy', 'all_parvas', 'war_mastery', 'first_quiz'],
    required: true
  },
  requirementValue: {
    type: mongoose.Schema.Types.Mixed
  },
  pointsReward: {
    type: Number,
    default: 100
  }
}, {
  timestamps: true
});

module.exports = mongoose.models.Achievement || mongoose.model('Achievement', achievementSchema);

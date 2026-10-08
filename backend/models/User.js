const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Player name is required'],
    trim: true,
    minlength: 2,
    maxlength: 50
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6,
    select: false
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  totalScore: {
    type: Number,
    default: 0
  },
  completedParvas: {
    type: [Number],
    default: []
  },
  currentParva: {
    type: Number,
    default: 1
  },
  achievements: [{
    code: String,
    title: String,
    unlockedAt: { type: Date, default: Date.now }
  }],
  quizAttempts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'QuizAttempt'
  }],
  totalQuestionsAnswered: {
    type: Number,
    default: 0
  },
  totalCorrectAnswers: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.models.User || mongoose.model('User', userSchema);

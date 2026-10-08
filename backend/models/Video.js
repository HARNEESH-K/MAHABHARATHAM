const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  parvaId: {
    type: mongoose.Schema.Types.Mixed
  },
  parvaNumber: {
    type: Number,
    required: true,
    min: 1,
    max: 18
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  youtubeUrl: {
    type: String,
    required: true
  },
  youtubeId: {
    type: String,
    required: true
  },
  channel: {
    type: String,
    default: 'Mahabharata Educational Archive'
  },
  duration: {
    type: String,
    default: '12:45'
  },
  thumbnail: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.models.Video || mongoose.model('Video', videoSchema);

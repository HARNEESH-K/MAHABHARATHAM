require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const path = require('path');
const { connectDB } = require('./config/db');
const { seedDatabase } = require('./seed/seedAll');
const { Parva } = require('./models');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

// Route imports
const authRoutes = require('./routes/authRoutes');
const parvaRoutes = require('./routes/parvaRoutes');
const questionRoutes = require('./routes/questionRoutes');
const quizRoutes = require('./routes/quizRoutes');
const progressRoutes = require('./routes/progressRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');
const videoRoutes = require('./routes/videoRoutes');
const adminRoutes = require('./routes/adminRoutes');
const { getAchievements } = require('./controllers/adminController');

const app = express();

// Render/Vercel sit behind a proxy - needed for correct client IPs in rate limiting
app.set('trust proxy', 1);

// Security and utility middlewares
app.use(helmet({
  crossOriginResourcePolicy: false,
  contentSecurityPolicy: false // Allows embedded YouTube iframes smoothly
}));

app.use(cors({
  origin: process.env.CLIENT_URL || (process.env.NODE_ENV === 'production' ? true : 'http://localhost:5173'),
  credentials: true
}));

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Rate limiter for security
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  message: {
    success: false,
    message: 'Too many requests from this IP. Please try again after 15 minutes.'
  }
});
app.use('/api', apiLimiter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    project: 'Mahabharata - The 18 Parvas Quest API',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/parvas', parvaRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/achievements', getAchievements);

// Serve the built React app (single-service deployment)
const distPath = path.join(__dirname, '..', 'frontend', 'dist');
app.use(express.static(distPath));
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.join(distPath, 'index.html'), (err) => err && next());
});

// Error Middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

async function start() {
  await connectDB();

  // First boot (or fresh/ephemeral database): load all content automatically
  try {
    if ((await Parva.countDocuments({})) === 0) {
      console.log('[BOOT] Empty database detected - seeding Parvas, questions, videos and accounts...');
      await seedDatabase();
    }
  } catch (err) {
    console.error('[BOOT] Auto-seed failed:', err.message);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`====================================================`);
    console.log(`🏹 MAHABHARATA - THE 18 PARVAS QUEST`);
    console.log(`⚡ Running in ${process.env.NODE_ENV || 'development'} mode on PORT ${PORT}`);
    console.log(`====================================================`);
  });
}

start();

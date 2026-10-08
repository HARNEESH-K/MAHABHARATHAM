const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User, QuizAttempt } = require('../models');

const generateToken = (id) => {
  const secret = process.env.JWT_SECRET || 'kurukshetra_dharma_divine_secret_key_2026_quest_token';
  return jwt.sign({ id }, secret, {
    expiresIn: '30d'
  });
};

// @desc Register new user
// @route POST /api/auth/register
exports.register = async (req, res, next) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields (Name, Email, and Password).'
      });
    }

    if (confirmPassword && password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: 'Password confirmation does not match password.'
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters long.'
      });
    }

    // Check existing email
    const existing = await User.findOne({ email: email.toLowerCase().trim() });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: 'An account with this email address already exists. Please log in.'
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      role: 'user',
      totalScore: 0,
      completedParvas: [],
      currentParva: 1,
      achievements: [],
      totalQuestionsAnswered: 0,
      totalCorrectAnswers: 0
    });

    const token = generateToken(user._id || user.id);

    return res.status(201).json({
      success: true,
      message: 'Welcome to the Mahabharata Quest, warrior!',
      token,
      user: {
        id: user._id || user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        totalScore: user.totalScore || 0,
        completedParvas: user.completedParvas || [],
        currentParva: user.currentParva || 1,
        achievements: user.achievements || [],
        totalQuestionsAnswered: user.totalQuestionsAnswered || 0,
        totalCorrectAnswers: user.totalCorrectAnswers || 0
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc Login user
// @route POST /api/auth/login
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please enter both email and password.'
      });
    }

    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password credentials.'
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password credentials.'
      });
    }

    const token = generateToken(user._id || user.id);

    return res.status(200).json({
      success: true,
      message: 'Login successful. Welcome back to your quest.',
      token,
      user: {
        id: user._id || user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        totalScore: user.totalScore || 0,
        completedParvas: user.completedParvas || [],
        currentParva: user.currentParva || 1,
        achievements: user.achievements || [],
        totalQuestionsAnswered: user.totalQuestionsAnswered || 0,
        totalCorrectAnswers: user.totalCorrectAnswers || 0
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc Get current user profile with rank
// @route GET /api/auth/me
exports.getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id || req.user.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User profile not found.'
      });
    }

    // Calculate global rank
    const allUsers = await User.find();
    const sorted = [...allUsers].sort((a, b) => (b.totalScore || 0) - (a.totalScore || 0));
    const rank = sorted.findIndex(u => String(u._id || u.id) === String(user._id || user.id)) + 1;

    const accuracy = user.totalQuestionsAnswered > 0
      ? Math.round((user.totalCorrectAnswers / user.totalQuestionsAnswered) * 100)
      : 0;

    return res.status(200).json({
      success: true,
      user: {
        id: user._id || user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        totalScore: user.totalScore || 0,
        completedParvas: user.completedParvas || [],
        currentParva: user.currentParva || 1,
        achievements: user.achievements || [],
        totalQuestionsAnswered: user.totalQuestionsAnswered || 0,
        totalCorrectAnswers: user.totalCorrectAnswers || 0,
        accuracy,
        rank: rank || 1
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc Update user profile
// @route PUT /api/auth/profile
exports.updateProfile = async (req, res, next) => {
  try {
    const { name, password } = req.body;
    const updateData = {};
    if (name) updateData.name = name.trim();
    if (password && password.length >= 6) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(password, salt);
    }

    const updated = await User.findByIdAndUpdate(req.user._id || req.user.id, {
      $set: updateData
    });

    return res.status(200).json({
      success: true,
      message: 'Profile updated successfully.',
      user: {
        id: updated._id || updated.id,
        name: updated.name,
        email: updated.email,
        role: updated.role,
        totalScore: updated.totalScore,
        completedParvas: updated.completedParvas,
        currentParva: updated.currentParva,
        achievements: updated.achievements
      }
    });
  } catch (error) {
    next(error);
  }
};

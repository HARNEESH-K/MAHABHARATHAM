const { User, Parva, Question, QuizAttempt, Video, Achievement } = require('../models');

// @desc Get Admin Dashboard Statistics
// @route GET /api/admin/stats
exports.getAdminStats = async (req, res, next) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalParvas = await Parva.countDocuments();
    const totalQuestions = await Question.countDocuments();
    const totalVideos = await Video.countDocuments();
    const allAttempts = await QuizAttempt.find();

    const totalQuizzesTaken = allAttempts.length;
    const totalScoreAccumulated = allAttempts.reduce((acc, curr) => acc + (curr.score || 0), 0);
    const averageScore = totalQuizzesTaken > 0 ? Math.round(totalScoreAccumulated / totalQuizzesTaken) : 0;
    const averageAccuracy = totalQuizzesTaken > 0
      ? Math.round(allAttempts.reduce((acc, curr) => acc + (curr.accuracy || 0), 0) / totalQuizzesTaken)
      : 0;

    return res.status(200).json({
      success: true,
      data: {
        totalUsers,
        totalParvas: totalParvas || 18,
        totalQuestions,
        totalVideos,
        totalQuizzesTaken,
        averageScore,
        averageAccuracy
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc Get all registered users (Admin only)
// @route GET /api/admin/users
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    const sanitized = users.map(u => ({
      id: u._id || u.id,
      name: u.name,
      email: u.email,
      role: u.role,
      totalScore: u.totalScore || 0,
      completedParvasCount: (u.completedParvas || []).length,
      currentParva: u.currentParva || 1,
      totalQuestionsAnswered: u.totalQuestionsAnswered || 0,
      totalCorrectAnswers: u.totalCorrectAnswers || 0,
      achievementsCount: (u.achievements || []).length,
      createdAt: u.createdAt
    }));

    return res.status(200).json({
      success: true,
      count: sanitized.length,
      data: sanitized
    });
  } catch (error) {
    next(error);
  }
};

// @desc Update user role (promote/demote admin)
// @route PUT /api/admin/users/:id/role
exports.updateUserRole = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { role } = req.body;

    if (!['user', 'admin'].includes(role)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid role specified. Must be user or admin.'
      });
    }

    const updated = await User.findByIdAndUpdate(id, { $set: { role } });
    if (!updated) {
      return res.status(404).json({
        success: false,
        message: 'User not found.'
      });
    }

    return res.status(200).json({
      success: true,
      message: `User role successfully updated to ${role}.`,
      data: {
        id: updated._id || updated.id,
        name: updated.name,
        role
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc Delete user
// @route DELETE /api/admin/users/:id
exports.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const removed = await User.findByIdAndDelete(id);
    if (!removed) {
      return res.status(404).json({
        success: false,
        message: 'User not found.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'User profile permanently removed.'
    });
  } catch (error) {
    next(error);
  }
};

// @desc Get all achievements
// @route GET /api/achievements
exports.getAchievements = async (req, res, next) => {
  try {
    const achievements = await Achievement.find();
    return res.status(200).json({
      success: true,
      count: achievements.length,
      data: achievements
    });
  } catch (error) {
    next(error);
  }
};

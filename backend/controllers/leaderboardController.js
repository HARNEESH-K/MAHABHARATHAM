const { User } = require('../models');

// @desc Get global leaderboard
// @route GET /api/leaderboard
exports.getLeaderboard = async (req, res, next) => {
  try {
    const users = await User.find();
    
    // Sort by totalScore DESC, then completedParvas count DESC
    const sorted = [...users].sort((a, b) => {
      const scoreDiff = (b.totalScore || 0) - (a.totalScore || 0);
      if (scoreDiff !== 0) return scoreDiff;
      return (b.completedParvas || []).length - (a.completedParvas || []).length;
    });

    const leaderboard = sorted.slice(0, 50).map((u, index) => {
      const accuracy = (u.totalQuestionsAnswered || 0) > 0
        ? Math.round(((u.totalCorrectAnswers || 0) / u.totalQuestionsAnswered) * 100)
        : 0;

      return {
        rank: index + 1,
        id: u._id || u.id,
        name: u.name,
        totalScore: u.totalScore || 0,
        completedParvasCount: (u.completedParvas || []).length,
        currentParva: u.currentParva || 1,
        accuracy,
        achievementsCount: (u.achievements || []).length,
        role: u.role
      };
    });

    return res.status(200).json({
      success: true,
      count: leaderboard.length,
      data: leaderboard
    });
  } catch (error) {
    next(error);
  }
};

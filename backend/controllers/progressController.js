const { User, Parva, QuizAttempt, Achievement } = require('../models');

// @desc Get comprehensive player progress
// @route GET /api/progress
exports.getProgress = async (req, res, next) => {
  try {
    const userId = req.user._id || req.user.id;
    const user = await User.findById(userId);
    const parvas = await Parva.find();
    const sortedParvas = [...parvas].sort((a, b) => (a.number || 0) - (b.number || 0));

    const attempts = await QuizAttempt.find({ userId });
    const allAchievements = await Achievement.find();

    const parvaProgress = sortedParvas.map(p => {
      const isCompleted = (user.completedParvas || []).includes(p.number);
      const isCurrent = user.currentParva === p.number;
      const isUnlocked = p.number <= (user.currentParva || 1) || isCompleted || p.number === 1;

      // Find best score for this parva
      const parvaAttempts = attempts.filter(a => a.parvaNumber === p.number);
      const bestScore = parvaAttempts.length > 0 ? Math.max(...parvaAttempts.map(a => a.score)) : 0;
      const highestAccuracy = parvaAttempts.length > 0 ? Math.max(...parvaAttempts.map(a => a.accuracy)) : 0;

      return {
        number: p.number,
        name: p.name,
        sanskritName: p.sanskritName,
        title: p.title,
        difficulty: p.difficulty,
        isCompleted,
        isCurrent,
        isUnlocked,
        attemptsCount: parvaAttempts.length,
        bestScore,
        highestAccuracy
      };
    });

    const accuracy = user.totalQuestionsAnswered > 0
      ? Math.round((user.totalCorrectAnswers / user.totalQuestionsAnswered) * 100)
      : 0;

    return res.status(200).json({
      success: true,
      data: {
        totalScore: user.totalScore || 0,
        completedCount: (user.completedParvas || []).length,
        totalParvas: 18,
        percentageCompleted: Math.round(((user.completedParvas || []).length / 18) * 100),
        currentParva: user.currentParva || 1,
        totalQuestionsAnswered: user.totalQuestionsAnswered || 0,
        totalCorrectAnswers: user.totalCorrectAnswers || 0,
        accuracy,
        achievements: user.achievements || [],
        totalAvailableAchievements: allAchievements.length,
        parvas: parvaProgress
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc Reset or update player progress
// @route PUT /api/progress
exports.updateProgress = async (req, res, next) => {
  try {
    const userId = req.user._id || req.user.id;
    const { action } = req.body;

    if (action === 'reset') {
      await User.findByIdAndUpdate(userId, {
        $set: {
          totalScore: 0,
          completedParvas: [],
          currentParva: 1,
          achievements: [],
          totalQuestionsAnswered: 0,
          totalCorrectAnswers: 0
        }
      });
      return res.status(200).json({
        success: true,
        message: 'Your sacred quest has been reset to the beginning of Adi Parva.'
      });
    }

    return res.status(400).json({
      success: false,
      message: 'Invalid progress action.'
    });
  } catch (error) {
    next(error);
  }
};

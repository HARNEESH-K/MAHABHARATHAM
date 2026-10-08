const { Question, Parva, User, QuizAttempt } = require('../models');
const { evaluateAchievements } = require('../services/achievementService');

// @desc Start a quiz session
// @route POST /api/quiz/start
exports.startQuiz = async (req, res, next) => {
  try {
    const { parvaNumber } = req.body;
    return res.status(200).json({
      success: true,
      message: 'Sacred quiz trial initiated. May Dharma guide your intellect.',
      parvaNumber,
      startedAt: new Date()
    });
  } catch (error) {
    next(error);
  }
};

// @desc Submit quiz and calculate score securely on backend
// @route POST /api/quiz/submit
exports.submitQuiz = async (req, res, next) => {
  try {
    const { parvaNumber, answers = [], timeTaken = 0, mode = 'parva' } = req.body;
    const userId = req.user._id || req.user.id;

    if (!Array.isArray(answers) || answers.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No quiz answers provided for evaluation.'
      });
    }

    let calculatedScore = 0;
    let correctCount = 0;
    const evaluatedAnswers = [];

    // Verify each answer against DB
    for (const item of answers) {
      const q = await Question.findById(item.questionId);
      if (!q) continue;

      const isCorrect = String(item.selectedAnswer).trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase();
      
      let questionPoints = q.points || 10;
      if (q.difficulty === 'hard') questionPoints = 20;
      else if (q.difficulty === 'medium') questionPoints = 15;
      else if (q.difficulty === 'easy') questionPoints = 10;

      if (isCorrect) {
        calculatedScore += questionPoints;
        correctCount += 1;
      }

      evaluatedAnswers.push({
        questionId: q._id || q.id,
        questionText: q.question,
        selectedAnswer: item.selectedAnswer,
        correctAnswer: q.correctAnswer,
        isCorrect,
        explanation: q.explanation,
        pointsAwarded: isCorrect ? questionPoints : 0
      });
    }

    const totalQuestions = evaluatedAnswers.length || answers.length;
    const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

    // Accuracy bonus: 100% accuracy earns 50 bonus points
    if (accuracy === 100 && totalQuestions >= 5) {
      calculatedScore += 50;
    }

    // Retrieve fresh user
    const user = await User.findById(userId);

    // Get Parva details if mode is parva
    let parvaName = 'General Quest';
    if (parvaNumber) {
      const p = await Parva.findOne({ number: parseInt(parvaNumber) });
      if (p) parvaName = p.name;
    }

    // Create QuizAttempt record
    const attempt = await QuizAttempt.create({
      userId,
      parvaNumber: parvaNumber ? parseInt(parvaNumber) : null,
      parvaName,
      score: calculatedScore,
      totalQuestions,
      correctAnswers: correctCount,
      accuracy,
      timeTaken: parseInt(timeTaken) || 0,
      mode,
      answers: evaluatedAnswers,
      completedAt: new Date()
    });

    // Progression logic: unlock next Parva if passed (>= 50% accuracy or at least 3 correct)
    let unlockedNext = false;
    let nextParvaNumber = user.currentParva;
    const currentCompleted = [...(user.completedParvas || [])];

    if (mode === 'parva' && parvaNumber) {
      const pNum = parseInt(parvaNumber);
      if (!currentCompleted.includes(pNum) && (accuracy >= 40 || correctCount >= 4)) {
        currentCompleted.push(pNum);
        currentCompleted.sort((a, b) => a - b);
      }

      if (pNum >= user.currentParva && user.currentParva < 18 && (accuracy >= 40 || correctCount >= 4)) {
        nextParvaNumber = pNum + 1;
        unlockedNext = true;
      }
    }

    // Update user stats
    const updatedUser = await User.findByIdAndUpdate(userId, {
      $inc: {
        totalScore: calculatedScore,
        totalQuestionsAnswered: totalQuestions,
        totalCorrectAnswers: correctCount
      },
      $set: {
        completedParvas: currentCompleted,
        currentParva: nextParvaNumber
      },
      $push: {
        quizAttempts: attempt._id || attempt.id
      }
    });

    // Evaluate Achievements
    user.completedParvas = currentCompleted;
    user.currentParva = nextParvaNumber;
    user.totalScore = (user.totalScore || 0) + calculatedScore;
    const newlyUnlockedAchievements = await evaluateAchievements(user, attempt);

    return res.status(200).json({
      success: true,
      message: accuracy >= 70 ? 'Victory! You have honored Dharma!' : 'Trial completed! Continue expanding your wisdom.',
      result: {
        attemptId: attempt._id || attempt.id,
        parvaNumber,
        parvaName,
        score: calculatedScore,
        totalQuestions,
        correctAnswers: correctCount,
        accuracy,
        timeTaken,
        mode,
        unlockedNext,
        nextParvaNumber,
        isCompleted: currentCompleted.includes(parseInt(parvaNumber)),
        answers: evaluatedAnswers,
        newAchievements: newlyUnlockedAchievements
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc Get user's quiz attempt history
// @route GET /api/quiz/history
exports.getQuizHistory = async (req, res, next) => {
  try {
    const userId = req.user._id || req.user.id;
    const history = await QuizAttempt.find({ userId });
    const sorted = [...history].sort((a, b) => new Date(b.completedAt || b.createdAt) - new Date(a.completedAt || a.createdAt));

    return res.status(200).json({
      success: true,
      count: sorted.length,
      data: sorted
    });
  } catch (error) {
    next(error);
  }
};

// @desc Get random quiz from unlocked parvas
// @route GET /api/quiz/random
exports.getRandomQuiz = async (req, res, next) => {
  try {
    const count = parseInt(req.query.count) || 10;
    const userCurrentParva = req.user ? (req.user.currentParva || 18) : 18;

    // Pick questions from Parvas up to currentParva
    const questions = await Question.find();
    const availableQuestions = questions.filter(q => q.parvaNumber <= userCurrentParva);

    const shuffled = [...(availableQuestions.length > 0 ? availableQuestions : questions)]
      .sort(() => 0.5 - Math.random())
      .slice(0, count);

    return res.status(200).json({
      success: true,
      count: shuffled.length,
      data: shuffled
    });
  } catch (error) {
    next(error);
  }
};

// @desc Get Final 50-Question Mahabharata Challenge
// @route GET /api/quiz/final-challenge
exports.getFinalChallenge = async (req, res, next) => {
  try {
    const user = req.user;
    const completedCount = (user.completedParvas || []).length;

    // Must have completed all 18 parvas (or admin bypass)
    if (completedCount < 18 && user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'The Final Mahabharata Challenge is locked! Complete all 18 Parvas to unlock this sacred ultimate trial.'
      });
    }

    const allQuestions = await Question.find();
    // Select roughly 2-3 questions from each of the 18 parvas to make 50 questions
    const selected = [];
    for (let p = 1; p <= 18; p++) {
      const parvaQs = allQuestions.filter(q => q.parvaNumber === p);
      const picked = parvaQs.sort(() => 0.5 - Math.random()).slice(0, 3);
      selected.push(...picked);
    }

    const shuffledFinal = selected.sort(() => 0.5 - Math.random()).slice(0, 50);

    return res.status(200).json({
      success: true,
      count: shuffledFinal.length,
      data: shuffledFinal
    });
  } catch (error) {
    next(error);
  }
};

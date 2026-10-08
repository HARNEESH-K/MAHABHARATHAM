const { Parva, Question, Video } = require('../models');

// @desc Get all 18 Parvas
// @route GET /api/parvas
exports.getAllParvas = async (req, res, next) => {
  try {
    const parvas = await Parva.find();
    // Sort numerically by parva number (1 to 18)
    const sorted = [...parvas].sort((a, b) => (a.number || 0) - (b.number || 0));

    // If user is authenticated, determine unlock status for each Parva
    const userCurrentParva = req.user ? (req.user.currentParva || 1) : 1;
    const userCompleted = req.user ? (req.user.completedParvas || []) : [];

    const parvasWithStatus = sorted.map(p => {
      const isCompleted = userCompleted.includes(p.number);
      const isUnlocked = p.number <= userCurrentParva || isCompleted || p.number === 1;
      return {
        ...p,
        isCompleted,
        isUnlocked
      };
    });

    return res.status(200).json({
      success: true,
      count: parvasWithStatus.length,
      data: parvasWithStatus
    });
  } catch (error) {
    next(error);
  }
};

// @desc Get single Parva by ID or Parva number
// @route GET /api/parvas/:id
exports.getParvaById = async (req, res, next) => {
  try {
    const { id } = req.params;
    let parva;

    // Check if queried by numeric number or MongoDB id
    if (!isNaN(id)) {
      parva = await Parva.findOne({ number: parseInt(id) });
    } else {
      parva = await Parva.findById(id);
    }

    if (!parva) {
      return res.status(404).json({
        success: false,
        message: `Parva with identifier '${id}' not found.`
      });
    }

    // Also fetch associated videos count and question count for exploration dashboard
    const questionCount = await Question.countDocuments({ parvaNumber: parva.number });
    const videos = await Video.find({ parvaNumber: parva.number });

    const userCurrentParva = req.user ? (req.user.currentParva || 1) : 1;
    const userCompleted = req.user ? (req.user.completedParvas || []) : [];
    const isCompleted = userCompleted.includes(parva.number);
    const isUnlocked = parva.number <= userCurrentParva || isCompleted || parva.number === 1;

    return res.status(200).json({
      success: true,
      data: {
        ...parva,
        questionCount,
        videos,
        isCompleted,
        isUnlocked
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc Create new Parva (Admin only)
// @route POST /api/parvas
exports.createParva = async (req, res, next) => {
  try {
    const newParva = await Parva.create(req.body);
    return res.status(201).json({
      success: true,
      message: 'Parva created successfully.',
      data: newParva
    });
  } catch (error) {
    next(error);
  }
};

// @desc Update Parva (Admin only)
// @route PUT /api/parvas/:id
exports.updateParva = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Parva.findByIdAndUpdate(id, { $set: req.body });
    if (!updated) {
      return res.status(404).json({
        success: false,
        message: 'Parva not found.'
      });
    }
    return res.status(200).json({
      success: true,
      message: 'Parva updated successfully.',
      data: updated
    });
  } catch (error) {
    next(error);
  }
};

// @desc Delete Parva (Admin only)
// @route DELETE /api/parvas/:id
exports.deleteParva = async (req, res, next) => {
  try {
    const { id } = req.params;
    const removed = await Parva.findByIdAndDelete(id);
    if (!removed) {
      return res.status(404).json({
        success: false,
        message: 'Parva not found.'
      });
    }
    return res.status(200).json({
      success: true,
      message: 'Parva removed successfully.'
    });
  } catch (error) {
    next(error);
  }
};

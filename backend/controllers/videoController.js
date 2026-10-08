const { Video, Parva } = require('../models');

// Extract YouTube ID from link
const extractYoutubeId = (url) => {
  if (!url) return '';
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : '';
};

// @desc Get videos for a specific Parva
// @route GET /api/parvas/:id/videos
exports.getVideosByParva = async (req, res, next) => {
  try {
    const { id } = req.params;
    let parvaNumber;

    if (!isNaN(id)) {
      parvaNumber = parseInt(id);
    } else {
      const parva = await Parva.findById(id);
      if (!parva) {
        return res.status(404).json({
          success: false,
          message: 'Parva not found.'
        });
      }
      parvaNumber = parva.number;
    }

    const videos = await Video.find({ parvaNumber });
    return res.status(200).json({
      success: true,
      count: videos.length,
      parvaNumber,
      data: videos
    });
  } catch (error) {
    next(error);
  }
};

// @desc Get all videos
// @route GET /api/videos
exports.getAllVideos = async (req, res, next) => {
  try {
    const videos = await Video.find();
    return res.status(200).json({
      success: true,
      count: videos.length,
      data: videos
    });
  } catch (error) {
    next(error);
  }
};

// @desc Create video reference (Admin only)
// @route POST /api/videos
exports.createVideo = async (req, res, next) => {
  try {
    const { parvaNumber, title, description, youtubeUrl, channel, duration } = req.body;
    if (!parvaNumber || !title || !youtubeUrl) {
      return res.status(400).json({
        success: false,
        message: 'Please provide Parva number, Title, and YouTube URL.'
      });
    }

    const youtubeId = extractYoutubeId(youtubeUrl);
    const thumbnail = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

    const newVideo = await Video.create({
      parvaNumber: parseInt(parvaNumber),
      title,
      description: description || '',
      youtubeUrl,
      youtubeId,
      channel: channel || 'Mahabharata Learning Hub',
      duration: duration || '10:00',
      thumbnail
    });

    return res.status(201).json({
      success: true,
      message: 'Video reference added successfully.',
      data: newVideo
    });
  } catch (error) {
    next(error);
  }
};

// @desc Update video reference (Admin only)
// @route PUT /api/videos/:id
exports.updateVideo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { youtubeUrl } = req.body;
    const updateData = { ...req.body };

    if (youtubeUrl) {
      updateData.youtubeId = extractYoutubeId(youtubeUrl);
      updateData.thumbnail = `https://img.youtube.com/vi/${updateData.youtubeId}/hqdefault.jpg`;
    }

    const updated = await Video.findByIdAndUpdate(id, { $set: updateData });
    if (!updated) {
      return res.status(404).json({
        success: false,
        message: 'Video reference not found.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Video updated successfully.',
      data: updated
    });
  } catch (error) {
    next(error);
  }
};

// @desc Delete video reference (Admin only)
// @route DELETE /api/videos/:id
exports.deleteVideo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const removed = await Video.findByIdAndDelete(id);
    if (!removed) {
      return res.status(404).json({
        success: false,
        message: 'Video not found.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Video removed successfully.'
    });
  } catch (error) {
    next(error);
  }
};

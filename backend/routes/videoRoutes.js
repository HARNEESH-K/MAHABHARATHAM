const express = require('express');
const router = express.Router();
const {
  getAllVideos,
  createVideo,
  updateVideo,
  deleteVideo
} = require('../controllers/videoController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

router.route('/')
  .get(getAllVideos)
  .post(protect, adminOnly, createVideo);

router.route('/:id')
  .put(protect, adminOnly, updateVideo)
  .delete(protect, adminOnly, deleteVideo);

module.exports = router;

const express = require('express');
const router = express.Router();
const {
  getAdminStats,
  getAllUsers,
  updateUserRole,
  deleteUser,
  getAchievements
} = require('../controllers/adminController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

router.get('/stats', protect, adminOnly, getAdminStats);
router.get('/users', protect, adminOnly, getAllUsers);
router.put('/users/:id/role', protect, adminOnly, updateUserRole);
router.delete('/users/:id', protect, adminOnly, deleteUser);
router.get('/achievements', getAchievements);

module.exports = router;

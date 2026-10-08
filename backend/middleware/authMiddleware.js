const jwt = require('jsonwebtoken');
const { User } = require('../models');

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const secret = process.env.JWT_SECRET || 'kurukshetra_dharma_divine_secret_key_2026_quest_token';
      const decoded = jwt.verify(token, secret);

      const user = await User.findById(decoded.id);
      if (!user) {
        return res.status(401).json({
          success: false,
          message: 'User no longer exists or session has expired.'
        });
      }

      req.user = user;
      next();
    } catch (error) {
      console.error('Auth verification error:', error.message);
      return res.status(401).json({
        success: false,
        message: 'Invalid or expired authentication token. Please log in again.'
      });
    }
  } else {
    return res.status(401).json({
      success: false,
      message: 'Authorization required. Please log in to proceed.'
    });
  }
};

const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    return res.status(403).json({
      success: false,
      message: 'Access denied: Administrator privileges required.'
    });
  }
};

module.exports = {
  protect,
  adminOnly
};

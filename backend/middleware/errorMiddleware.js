const notFound = (req, res, next) => {
  const error = new Error(`Resource Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  
  // Custom message handling for duplicate keys and validation errors
  let message = err.message;
  if (err.code === 11000) {
    message = 'Duplicate field value entered. Please use a unique value.';
  } else if (err.name === 'ValidationError') {
    message = Object.values(err.errors).map(val => val.message).join(', ');
  } else if (err.name === 'CastError') {
    message = `Resource not found with specified identifier.`;
  }

  res.status(statusCode).json({
    success: false,
    message: message || 'An unexpected error occurred.',
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
};

module.exports = {
  notFound,
  errorHandler
};

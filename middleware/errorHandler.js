const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.json({ statusCode, message: err.message, stackTrace: err.stack });
};

module.exports = errorHandler;
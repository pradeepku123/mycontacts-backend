const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  console.log(constants.NOT_FOUND);
  switch (statusCode) {
    case constants.NOT_FOUND:
      res.json({
        title: "Validation Failed",
        statusCode,
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.UN_AUTHORIZED:
      res.json({
        title: "Unauhorized Error",
        statusCode,
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
      res.json({
        title: "NOT_FOUND",
        statusCode,
        message: err.message,
        stackTrace: err.stack,
      });
  }
};

module.exports = errorHandler;

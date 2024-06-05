const globalErrorHandler = (err, req, res, next) => {
  // error handlers have four arguments and they are (err,req,res,next)
  const stack = err.stack;
  const message = err.message;
  const status = err.status ? err.status : "failed";
  const statusCode = err.statusCode ? err.statusCode : 500;
  res.status(statusCode).json({
    message,
    stack,
    status,
  });
};

module.exports = globalErrorHandler;

export default (err, req, res, next) => {
  res.status(err.statusCode || 500).json({ errors: err.errors });
};

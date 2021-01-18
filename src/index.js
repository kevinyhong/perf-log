const { performance } = require('perf_hooks')

module.exports = (req, res, next) => {
  req.requestTime = performance.now();
  req.timeout(60000, () => {
    res.status(408).end(JSON.stringify(new Error("Client request timed out after 60 seconds. Please verify that all inputs for the request are correct.")));
  })
  next();
}
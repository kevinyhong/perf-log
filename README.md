Express.js middleware to initiate request performance logging using the perf_hooks module.

How to use:

```

const { performance } = require('perf_hooks');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8888;
const perf_log = require('perf-log');

app.use(perf_log());

app.get('/endpoint', (req, res) => {
  // Perform operations as required...

  // Whenever you want to check the time since the request was picked up,
  // you can access req.requestTime to calculate the difference.
  console.log(performance.now() - req.requestTime);

  res.end();
})

app.listen(PORT);

```
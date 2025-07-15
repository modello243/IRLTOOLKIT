const express = require('express');
const cron = require('node-cron');
const router = express.Router();
const jobs = {};

router.post('/', (req, res) => {
  const { name, cronTime, command } = req.body;
  if (jobs[name]) jobs[name].stop();
  jobs[name] = cron.schedule(cronTime, () => console.log(`Running job ${name}: ${command}`));
  res.json({ status: 'scheduled' });
});

module.exports = router;

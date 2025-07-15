const cron = require('node-cron');
cron.schedule('0 8 * * *', () => console.log('Daily 8AM job'));

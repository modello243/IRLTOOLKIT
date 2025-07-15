const axios = require('axios');
async function sendWebhook(event) {
  try {
    await axios.post(process.env.WEBHOOK_URL, { event });
    console.log('Webhook sent');
  } catch (err) {
    console.error('Webhook error', err);
  }
}
module.exports = { sendWebhook };

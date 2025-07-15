const express = require('express');
const router = express.Router();
let currentOverlay = '<div id="overlay">Welcome!</div>';

router.get('/', (req, res) => res.send(currentOverlay));
router.post('/', (req, res) => { currentOverlay = req.body.html; res.json({ status: 'updated' }); });

module.exports = router;

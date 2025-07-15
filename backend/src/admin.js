const express = require('express');
const router = express.Router();
const users = new Map();

router.get('/health', (req, res) => res.json({ status: 'ok', uptime: process.uptime() }));
router.get('/users', (req, res) => res.json([...users.entries()]));
router.post('/users/:id/ban', (req, res) => { const u = users.get(req.params.id) || {}; u.banned = true; users.set(req.params.id, u); res.sendStatus(204); });
router.post('/users/:id/reset-key', (req, res) => { const key = Math.random().toString(36).slice(2); const u = users.get(req.params.id) || {}; u.key = key; users.set(req.params.id, u); res.json({ key }); });
router.delete('/users/:id', (req, res) => { users.delete(req.params.id); res.sendStatus(204); });

module.exports = router;

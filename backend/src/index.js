require('dotenv').config();
const express = require('express');
const passport = require('passport');
const session = require('express-session');
require('./auth');
const adminRoutes = require('./admin');
const overlayRoutes = require('./overlay');
const schedulerRoutes = require('./scheduler');
const { sendWebhook } = require('./webhook');
const { logEvent } = require('./analytics');
const app = express();

app.use(express.json());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/admin', adminRoutes);
app.use('/api/overlay', overlayRoutes);
app.use('/api/schedule', schedulerRoutes);

app.get('/auth/twitch', passport.authenticate('twitch'));
app.get('/auth/twitch/callback', passport.authenticate('twitch', { failureRedirect: '/login' }), (req, res) => res.redirect('/'));
app.get('/auth/google', passport.authenticate('google', { scope: ['email','profile'] }));
app.get('/auth/google/callback', passport.authenticate('google',{ failureRedirect:'/login' }), (req,res)=>res.redirect('/'));

app.get('/api/health', (req,res)=>res.json({ok:true, uptime: process.uptime()}));
app.get('/api/metrics', (req,res)=>res.json({ activeUsers: 0, uptime: process.uptime() }));

app.listen(3000,()=>console.log('Backend running on :3000'));
module.exports = app;

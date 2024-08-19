// routes/logout.js

const express = require('express');
const router = express.Router();
const ctrlLogout = require('../controllers/logout');

// GET logout route
router.get('/', ctrlLogout.logoutUser);

module.exports = router;

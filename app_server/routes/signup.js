// app_server/routes/signup.js

var express = require('express');
var router = express.Router();
var ctrlSignup = require('../controllers/signup');

// GET signup page
router.get('/', ctrlSignup.signupPage);

// POST signup form submission
router.post('/', ctrlSignup.signupUser);

module.exports = router;

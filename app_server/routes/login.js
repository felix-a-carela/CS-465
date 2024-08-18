// app_server/routes/login.js

var express = require('express');
var router = express.Router();
var ctrlLogin = require('../controllers/login');

// GET login page
router.get('/', ctrlLogin.loginPage);

// POST login form submission
router.post('/', ctrlLogin.loginUser);

module.exports = router;

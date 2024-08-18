// app_server/routes/about.js

var express = require('express');
var router = express.Router();
var ctrlAbout = require('../controllers/about');

// GET about page
router.get('/', ctrlAbout.aboutPage);

module.exports = router;

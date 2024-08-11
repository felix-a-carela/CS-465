// app_server/routes/travel.js

var express = require('express');
var router = express.Router();
var ctrlTravel = require('../controllers/travel');

// GET travel page
router.get('/', ctrlTravel.travel);

module.exports = router;

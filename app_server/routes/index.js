var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlTravel = require('../controllers/travel');

// GET home page
router.get('/', ctrlMain.index);

// GET travel page
router.get('/travel', ctrlTravel.travel);

module.exports = router;

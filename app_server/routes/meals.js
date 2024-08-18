// app_server/routes/meals.js

var express = require('express');
var router = express.Router();
var ctrlMeals = require('../controllers/meals');

// GET meals page
router.get('/', ctrlMeals.mealsPage);

module.exports = router;

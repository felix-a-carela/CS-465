// app_server/routes/rooms.js

var express = require('express');
var router = express.Router();
var ctrlRooms = require('../controllers/rooms');

// GET rooms page
router.get('/', ctrlRooms.roomsPage);

module.exports = router;

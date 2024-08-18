// app_server/routes/contact.js

var express = require('express');
var router = express.Router();
var ctrlContact = require('../controllers/contact');

// GET contact page
router.get('/', ctrlContact.contactPage);

// POST contact form
router.post('/', ctrlContact.handleFormSubmit);

module.exports = router;

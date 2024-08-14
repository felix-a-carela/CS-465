// app_api/routes/index.js

const express = require('express'); // Express app
const router = express.Router(); // Router logic

// This is where we import the controllers we will route
const tripsController = require('../controllers/trips');

// define route for our trips endpoint
router
    .route('/trips')
    .get((req, res, next) => {
        console.log('GET /trips route accessed');
        next();
    }, tripsController.tripsList) // GET Method routes tripList
    .post((req, res, next) => {
        console.log('POST /trips route accessed');
        next();
    }, tripsController.tripsAddTrip); // POST Method Adds a Trip

// GET Method routes tripsFindByCode - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;

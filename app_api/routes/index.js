// app_api/routes/index.js

const express = require('express'); // Express app
const router = express.Router(); // Router logic

// This is where we import the controllers we will route
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');
const jwt = require('jsonwebtoken'); // Enable JSON Web Tokens

// Method to authenticate our JWT
function authenticateJWT(req, res, next) {
    // console.log('In Middleware');
    const authHeader = req.headers['authorization'];
    // console.log('Auth Header: ' + authHeader);
    if (authHeader == null) {
        console.log('Auth Header Required but NOT PRESENT!');
        return res.sendStatus(401);
    }
    let headers = authHeader.split(' ');
    if (headers.length < 2) {
        console.log('Not enough tokens in Auth Header: ' + headers.length);
        return res.sendStatus(501);
    }
    const token = headers[1];
    // console.log('Token: ' + token);
    if (token == null) {
        console.log('Null Bearer Token');
        return res.sendStatus(401);
    }
    // console.log(process.env.JWT_SECRET);
    // console.log(jwt.decode(token));
    jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
        if (err) {
            return res.sendStatus(401).json('Token Validation Error!');
        }
        req.auth = verified; // Set the auth param to the decoded object
        next(); // We need to continue or this will hang forever
    });
}

// define route for our registration endpoint
router
    .route('/register')
    .post(authController.register);

// define route for our login endpoint
router
    .route('/login')
    .post(authController.login);

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
    }, authenticateJWT, tripsController.tripsAddTrip); // POST Method Adds a Trip

// GET Method routes tripsFindByCountry - requires parameter
// GET Method routes tripsFindByCode - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(authenticateJWT, tripsController.tripsUpdateTrip);

module.exports = router;

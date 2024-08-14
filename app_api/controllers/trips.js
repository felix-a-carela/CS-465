// app_api/controllers/trips.js

const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async (req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec();

        // Uncomment the following line to show results of query
        // on the console
        // console.log(q);

    if (!q) {
        // If Database returned no data
        return res
            .status(404)
            .json(err);
    } else { // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }

};

// GET: /trips/:tripCode - lists a single trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsFindByCode = async (req, res) => {
    const q = await Model
        .find({'code': req.params.tripCode}) // Return single record
        .exec();

        // Uncomment the following line to show results of query
        // on the console
        // console.log(q);

    if (!q) {
        // If Database returned no data
        return res
            .status(404)
            .json(err);
    } else { // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }

};

// POST: /trips - Adds a new Trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsAddTrip = async (req, res) => {
    try {
        // Log the incoming request body to see what data is being sent
        console.log("Request Body:", req.body);

        // Create a new Trip instance with the data from the request body
        const newTrip = new Trip({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        });

        // Log the newTrip object to ensure it's being created correctly
        console.log("New Trip Object:", newTrip);

        // Attempt to save the new trip to the database
        const q = await newTrip.save();

        // Log the result of the save operation
        console.log("Save Result:", q);

        if (!q) {
            // Log an error message if no data was returned from the save operation
            console.error("Failed to save the trip");
            return res
                .status(400)
                .json({ error: 'Failed to save the trip' });
        } else {
            // Log a success message and return the newly created trip
            console.log("Trip saved successfully");
            return res
                .status(201)
                .json(q);
        }
    } catch (err) {
        // Log any errors that occur during the process
        console.error("Error during trip creation:", err);
        return res
            .status(500)
            .json({ error: 'Server error', details: err.message });
    }
};

// PUT: /trips/:tripCode - Updates an existing Trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsUpdateTrip = async (req, res) => {
    // Uncomment for debugging
    console.log(req.params);
    console.log(req.body);

    const q = await Model
        .findOneAndUpdate(
            { 'code': req.params.tripCode },
            {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            }
        )
        .exec();

    if (!q) { // Database returned no data
        return res
            .status(400)
            .json(err);
    } else { // Return resulting updated trip
        return res
            .status(201)
            .json(q);
    }

    // Uncomment the following line to show results of operation on the console
    // console.log(q);
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip,
};

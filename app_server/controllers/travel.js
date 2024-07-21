var fs = require('fs');
var path = require('path');
var trips = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/trips.json'), 'utf8'));

// Get travel view
const travel = (req, res) => {
    res.render('travel', { 
        title: "Travlr Getaways",
        trips: trips,
        current: 'travel'
    });
};

module.exports = {
    travel
};

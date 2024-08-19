// controllers/logout.js

// Handle logout
const logoutUser = (req, res, next) => {
    req.logout(function(err) {
        if (err) {
            return next(err);
        }
        res.clearCookie('jwt'); // Clear the JWT token cookie
        res.redirect('/login'); // Redirect to the login page after logout
    });
};

module.exports = {
    logoutUser
};
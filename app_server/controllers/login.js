// app_server/controllers/login.js

const passport = require('passport');
const jwt = require('jsonwebtoken');

// Render the login page
const loginPage = (req, res) => {
    res.render('login', {
        title: "Login - Travlr Getaways",
        current: 'login'
    });
};

// Handle login form submission
const loginUser = (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.render('login', {
                title: "Login - Travlr Getaways",
                current: 'login',
                error: 'Invalid email or password.'
            });
        }
        // Generate a JWT token
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log('User logged in:', user);

        // Send the token as a cookie
        res.cookie('jwt', token, { httpOnly: true, secure: false }); // In production, set secure: true
        return res.redirect('/');
    })(req, res, next);
};

// Handle logout
const logoutUser = (req, res) => {
    res.clearCookie('jwt'); // Clear the JWT token cookie
    res.redirect('/login');
};

module.exports = {
    loginPage,
    loginUser,
    logoutUser
};

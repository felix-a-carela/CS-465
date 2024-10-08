// app_api/controllers/authentication.js

const mongoose = require('mongoose');
const User = mongoose.model('users');
const passport = require('passport');

// Handle user registration
const register = async (req, res) => {
  // Validate message to ensure that all parameters are present
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ "message": "All fields required" });
  }

  const user = new User({
    name: req.body.name,     // Set User name
    email: req.body.email,   // Set e-mail address
    password: ''             // Start with empty password
  });

  user.setPassword(req.body.password); // Set user password
  const q = await user.save();

  if (!q) {
    // Database returned no data
    return res
      .status(400)
      .json({ "message": "Error saving user to database" });
  } else {
    // Return new user token
    const token = user.generateJWT();
    return res
      .status(200)
      .json({ token });
  }
};

// Handle user login
const login = (req, res) => {
  // Validate message to ensure that email and password are present.
  if (!req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ "message": "All fields required" });
  }

  // Delegate authentication to passport module
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) {
      // Error in Authentication Process
      return res
        .status(404)
        .json({ "message": "Error in authentication process", err });
    }
    if (user) { // Auth succeeded - generate JWT and return to caller
      const token = user.generateJWT();
      return res
        .status(200)
        .json({ token });
    } else { // Auth failed, return error
      return res
        .status(401)
        .json({ "message": "Authentication failed", info });
    }
  })(req, res);
};

module.exports = {
  register,
  login
};

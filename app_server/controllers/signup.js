// app_server/controllers/signup.js

const mongoose = require('mongoose');
const User = mongoose.model('users');

const signupPage = (req, res) => {
    res.render('signup', {
        title: "Sign Up - Travlr Getaways",
        current: 'signup'
    });
};

const signupUser = async (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password || !req.body.passwordConfirm) {
        return res.render('signup', {
            title: "Sign Up - Travlr Getaways",
            current: 'signup',
            error: 'All fields are required.'
        });
    }

    if (req.body.password !== req.body.passwordConfirm) {
        return res.render('signup', {
            title: "Sign Up - Travlr Getaways",
            current: 'signup',
            error: 'Passwords do not match.'
        });
    }

    const user = new User({
        name: req.body.name,
        email: req.body.email
    });

    user.setPassword(req.body.password);

    try {
        await user.save();
        res.redirect('/login');
    } catch (err) {
        res.render('signup', {
            title: "Sign Up - Travlr Getaways",
            current: 'signup',
            error: 'Something went wrong. Please try again.'
        });
    }
};

module.exports = {
    signupPage,
    signupUser
};

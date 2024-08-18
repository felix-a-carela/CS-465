// app_api/config/passport.js

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.use(new LocalStrategy(
  {
    usernameField: 'email'
  },
  async (username, password, done) => {
    const q = await User
      .findOne({ email: username })
      .exec();

    // Uncomment the following line to show results of query
    // on the console
    // console.log(q);

    if (!q) // If the DB returned no records, the user doesn't exist
    {
      return done(null, false, { message: 'Incorrect Username' });
    }
    if (!q.validPassword(password)) // Validate password
    {
      return done(null, false, { message: 'Incorrect Password' });
    }
    return done(null, q); // Everything is OK, return user object
  }
));

// Serialize the user into the session
passport.serializeUser((user, done) => {
  done(null, user.id); // Save the user ID to the session
});

// Deserialize the user from the session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id).exec();
    done(null, user); // Retrieve the full user object from the database
  } catch (err) {
    done(err, null);
  }
});

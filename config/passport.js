const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const { secretOrKey } = require("./keys");
const mongoose = require("mongoose");
const User = mongoose.model("User");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey
};

module.exports = passport => {
  passport.use(new JwtStrategy(options, (jwtPayload, done) => {
    User.findById(jwt_payload.id)
      .then(user => {
        if (user) {
          return done(null, user);
        }

        return done(null, false);
      })
      .catch(err => console.log(err));
  }));
};
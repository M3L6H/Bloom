const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const { secretOrKey } = require("./keys");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey
};

module.exports = passport => {
  passport.use(new JwtStrategy(options, (jwtPayload, done) => {
    console.log(jwtPayload);
    done();
  }));
};
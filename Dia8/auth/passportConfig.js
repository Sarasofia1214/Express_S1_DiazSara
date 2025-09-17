import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import passport from "passport";
import dotenv from "dotenv";
dotenv.config();

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new JwtStrategy(options, async (jwt_payload, done) => {
    try {
    return done(null, jwt_payload);}
    catch (error) {
    return done(error, false);
    }
  })
);

export default passport;

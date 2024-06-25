import passport from "passport";
import passportJWT from "passport-jwt";
import * as dotenv from "dotenv";
import { db } from "./db";
dotenv.config();

const { SECRET } = process.env;

if (!SECRET) {
    throw new Error("SECRET key is not defined in environment variables");
  }

passport.use(
  new passportJWT.Strategy(
    {
      secretOrKey: SECRET,
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (payload, done) => {
        const user = db.one(`SELECT * FROM users WHERE ID =$1`, payload.id)

        try {
            return user ? done(null, user) : done(new Error("User not found"))
        } catch (error) {
            done(error)
        }
    }
  )
);

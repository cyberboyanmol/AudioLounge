import { getConfig } from '@/config';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

passport.use(
  new GoogleStrategy(
    {
      clientID: getConfig().GOOGLE_CLIENT_ID,
      clientSecret: getConfig().GOOGLE_CLIENT_SECRET,
      callbackURL: `http://${getConfig().server.host}:${getConfig().server.port}/api/v1/auth/google/callback`,
      scope: ['profile', 'email', 'openid'],
    },
    function (accessToken, refreshToken, profile, callback) {
      callback(null, profile);
    },
  ),
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user: 'false | User | null | undefined', done) => {
  done(null, user);
});

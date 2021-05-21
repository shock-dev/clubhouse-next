import passport from 'passport';
import github from './github';
import User from '../models/User';
import { IUser } from '../types/user';

passport.use('github', github);

passport.serializeUser((user: IUser, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

export default passport;

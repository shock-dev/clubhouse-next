import { Profile, Strategy } from 'passport-github';
import User from '../models/User';
import { IUser } from '../types/user';

const github = new Strategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: 'http://localhost:5000/auth/github/callback'
},
async (accessToken, refreshToken, profile: Profile, done) => {
  try {
    const foundUser = await User.findOne({ username: profile.username });

    if (foundUser) {
      return done(null, foundUser);
    }

    const user: IUser = await User.create({
      fullname: profile.displayName,
      username: profile.username,
      avatarUrl: profile?.photos[0].value,
      isActive: 0,
      phone: ''
    });

    done(null, user);
  } catch (e) {
    done(e);
  }
}
);

export default github;

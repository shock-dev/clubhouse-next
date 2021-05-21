import { Router } from 'express';
import passport from '../strategies';
import controller from '../controllers/auth.controller';
import { Strategies } from '../strategies/types';

const router = Router();

router.get(
  '/github',
  passport.authenticate(Strategies.GITHUB)
);

router.get(
  '/github/callback',
  passport.authenticate(Strategies.GITHUB, { failureRedirect: '/login' }),
  controller.authCallback
);

export default router;

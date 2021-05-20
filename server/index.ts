import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import consola from 'consola';
import connect from './core/db';

dotenv.config({
  path: 'server/.env'
});

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(passport.initialize());

connect()
  .then(() => {
    app.listen(port, () => {
      consola.success(`Server has been started at http://localhost:${port}`);
    });
  });

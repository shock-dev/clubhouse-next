import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import sharp from 'sharp';
import fs from 'fs';
import consola from 'consola';
import connect from './core/db';
import { uploader } from './core/uploader';

dotenv.config({
  path: 'server/.env'
});

import authRoutes from './routes/auth';

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(passport.initialize());

app.use('/auth', authRoutes);

app.post('/upload', uploader.single('photo'), (req, res) => {
  sharp.cache(false);
  const filePath = req.file.path;
  sharp(filePath)
    .resize(150, 150)
    .toFormat('jpeg')
    .toFile(filePath.replace('.png', '.jpeg'), (err) => {
      if (err) {
        throw err;
      }

      fs.unlinkSync(filePath);

      res.json({
        url: `/avatars/${req.file.filename.replace('.png', '.jpeg')}`
      });
    });
});

connect()
  .then(() => {
    app.listen(port, () => {
      consola.success(`Server has been started at http://localhost:${port}`);
    });
  });

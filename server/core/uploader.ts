import multer from 'multer';
import { nanoid } from 'nanoid';

export const uploader = multer({
  storage: multer.diskStorage({
    destination: (_, __, cb) => {
      cb(null, 'public/avatars');
    },
    filename: (_, file, cb) => {
      cb(null, file.fieldname + '-' + nanoid(6) + '.' + file.mimetype.split('/').pop());
    }
  })
});

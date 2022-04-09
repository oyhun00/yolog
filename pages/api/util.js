import nextConnect from 'next-connect';
import multer from 'multer';
import multerS3 from 'multer-s3';
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_S3_REGION,
});

const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: process.env.REACT_APP_S3_BUCKET,
    key(req, file, cb) {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  }),
});

const handler = nextConnect({
  onError: (err, req, res) => {
    res.status(500).end('Something broke!');
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found');
  },
})
  .use(upload.single('files'))
  .post((req, res) => {
    res.status(200).json(req.file);
  });

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};

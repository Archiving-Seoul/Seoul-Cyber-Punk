import multer from "multer";
import multerS3 from "multer-s3";
import { S3 } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
dotenv.config();

const s3 = new S3({
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  },
  region: process.env.REGION,
});

const bucket = process.env.BUCKET || "none";

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: bucket,
    key: function (req, file, cb) {
      cb(
        null,
        "onlyimage/" + Date.now() + "." + file.originalname.split(".").pop()
        //`${Date.now()}_${file.originalname}`
      );
    },
    acl: "public-read-write",
  }),
});

export { upload };

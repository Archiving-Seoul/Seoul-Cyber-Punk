import express from "express";
import cors from "cors";
<<<<<<< HEAD
import { tourRouter } from "./routers/tour-router";
import { aboutRouter } from "./routers/about-router";
import { youtubeRouter } from "./routers/youtube-router";
=======
import {tourRouter} from "./routers/tour-router";
import {aboutRouter} from "./routers/about-router";
>>>>>>> 5b4bc8fe4cf350620db63c72fcfd279c50fad88c

import bodyParser from "body-parser";

const app = express();
// CORS 에러 방지
app.use(
  cors({
    origin: true,
    credentials: true, // 크로스 도메인 허용
    methods: ["POST", "PATCH", "GET", "DELETE", "OPTIONS", "HEAD"],
  })
);

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use("/", tourRouter);
app.use("/api/about", aboutRouter);
<<<<<<< HEAD
app.use("/api/youtube", youtubeRouter);
=======
app.use("/api/spot", tourRouter);
>>>>>>> 5b4bc8fe4cf350620db63c72fcfd279c50fad88c
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

export {app};

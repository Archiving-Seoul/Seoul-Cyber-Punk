import express from "express";
import cors from "cors";
import path from "path";
import {tourRouter} from "./routers/tour-router";
import {aboutRouter} from "./routers/about-router";
import {youtubeRouter} from "./routers/youtube-router";
import {adminRouter} from "./routers/admin-router.js";

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
app.use("/api/youtube", youtubeRouter);
app.use("/api/spot", tourRouter);
app.use("/api/admin", adminRouter);

app.use(express.static(path.join(__dirname, "../build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

export {app};

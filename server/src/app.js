const express = require("express");
const app = express();
const cors = require("cors");
const tourRouter = require("../src/routers/index");
const bodyParser = require("body-parser");

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
app.use(express.static(`${__dirname}/src/public`)); //정적 경로 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", tourRouter);
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

module.exports = app;

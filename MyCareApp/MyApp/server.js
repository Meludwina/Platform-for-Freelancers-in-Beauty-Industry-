var express = require("express");
var env = require("dotenv").config();
var ejs = require("ejs");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var session = require("express-session");
var MongoStore = require("connect-mongo")(session);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use("/", express.static("WebApp/build"));

app.use("/api", require("./REST Server/routes/index"));

app.use(
  "/static",
  express.static(path.join(__dirname, "WebApp/build//static"))
);

app.get("*", function (req, res) {
  res.sendFile("index.html", {
    root: path.join(__dirname, "WebApp/build/"),
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("File Not Found");
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Server is started on http://127.0.0.1:" + PORT);
});

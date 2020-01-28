var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var userRouter = require("./routes/user");
var indexRouter = require("./routes/index");
var app = express();

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use("/user", userRouter);

app.use((req, res, next) => {
  next(createError(404))
})

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err: {};

  res.status(err.status || 500);
  res.render('error');
})

module.exports = app; 

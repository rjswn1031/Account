var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// ================ MySQL DB Connection ====================
// var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'admin',
//   password: 'admin',
//   database: 'account'
// })

// connection.connect(function(err) {
//   if(err) {
//     console.log('connection error');
//     console.log(err);
//     throw err;
//   }
// })

// ================ ORACLE DB Connection ====================

// ================ router ====================
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var memberRouter = require('./routes/member');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/api/member', memberRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

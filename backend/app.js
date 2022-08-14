var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var server = require('./server')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var teamRoute = require('./routes/team.js')
var feeRoute = require('./routes/fee.js')
var coachRoute = require('./routes/coach.js')
var matchRoute = require('./routes/match.js')
var playerRoute = require('./routes/player.js')
var homeRoute = require('./routes/home.js')
var awayRoute = require('./routes/away.js')
var leagueRoute = require('./routes/league.js')
var cors = require('cors')

const passport = require("passport");


var app = express();

// view engine setup
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/fee', feeRoute);
app.use('/teams', teamRoute);
app.use('/match', matchRoute);
app.use('/coach', coachRoute);
app.use('/player', playerRoute);
app.use('/home', homeRoute);
app.use('/away', awayRoute);
app.use('/league', leagueRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// require("./config/passport")(passport);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
const port = 8001
app.listen(port, () => {
  console.log(`Working at ${port}`)
})
module.exports = app;

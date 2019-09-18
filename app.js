var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');
var fileUpload = require('express-fileupload')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login')

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(fileUpload())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public',express.static(path.join(__dirname, '/public')));
app.use('/css',express.static(path.join(__dirname,'/node_modules/bootstrap/dist/css/bootstrap.css')))
app.use('/jquery',express.static(path.join(__dirname, '/node_modules/jquery/dist/jquery.js')));
app.use('/query',express.static(path.join(__dirname,'/query')))
app.use('/views',express.static(path.join(__dirname,'/views')))
app.use('/routes',express.static(path.join(__dirname,'/routes')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/login',loginRouter)

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

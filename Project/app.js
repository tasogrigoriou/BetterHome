var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var registerController = require('./controllers/register');

var app = express();
app.enable('trust proxy');

var database = require('./models/cloudsql');

var apiExampleRouter = require('./controllers/example');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/about-us', express.static(path.join(__dirname, 'public')));
app.use('/example', express.static(path.join(__dirname, 'public')));

app.use('/api/example', apiExampleRouter);


app.get('/register.component.html',function(req, res){
  res.sendFile(__dirname + '/' + "register.component.html");
})

app.post('/api/register', registerController.register);

app.post('controllers/register', registerController.register);
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

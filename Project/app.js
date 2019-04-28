const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');

const apiRegisterRouter = require('./controllers/register');
const apiExampleRouter = require('./controllers/example');
const apiUploadRouter = require('./controllers/upload');
const apiLoginRouter = require('./controllers/login');
const apiSearchRouter = require('./controllers/search');
const apiListingRouter = require('./controllers/listing');

const app = express();
app.enable('trust proxy');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json({limit: '5MB'}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'images')));

app.use('/about-us', express.static(path.join(__dirname, 'public')));
app.use('/example', express.static(path.join(__dirname, 'public')));
app.use('/register', express.static(path.join(__dirname, 'public')));
app.use('/login', express.static(path.join(__dirname, 'public')));
app.use('/search-results', express.static(path.join(__dirname, 'public')));

app.use('/api/search', apiSearchRouter);
app.use('/api/example', apiExampleRouter);
app.use('/api/register',apiRegisterRouter);
app.use('/api/login', apiLoginRouter);
app.use('/api/upload', apiUploadRouter);
app.use('/api/listing', apiListingRouter);

app.use(function(err, req, res) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

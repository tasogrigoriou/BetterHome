const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');

const apiRegisterRouter = require('./controllers/register');
const apiUploadRouter = require('./controllers/upload');
const apiLoginRouter = require('./controllers/login');
const apiSearchRouter = require('./controllers/search');
const apiListingRouter = require('./controllers/listing');
const apiFavoritesRouter = require('./controllers/favorites');
const apiAdminRouter = require('./controllers/admin');

const app = express();
app.enable('trust proxy');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json({limit: '5MB'}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/about-us', express.static(path.join(__dirname, 'public')));
app.use('/example', express.static(path.join(__dirname, 'public')));
app.use('/register', express.static(path.join(__dirname, 'public')));
app.use('/login', express.static(path.join(__dirname, 'public')));
app.use('/search-results', express.static(path.join(__dirname, 'public')));

app.use('/api/search', apiSearchRouter);
app.use('/api/register',apiRegisterRouter);
app.use('/api/login', apiLoginRouter);
app.use('/api/upload', apiUploadRouter);
app.use('/api/listing', apiListingRouter);
app.use('/api/favorites', apiFavoritesRouter);
app.use('/api/admin', apiAdminRouter);

app.use(function(err, req, res) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

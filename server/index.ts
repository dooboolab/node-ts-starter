import 'source-map-support/register';

import router_general from './routers/general';
import router_auth from './routers/apis/auth';

import express = require('express');
import util = require('util');
import ejs = require('ejs');
import path = require('path');
import cookieParser = require('cookie-parser');
import bodyParser = require('body-parser');
import session = require('express-session');
import connectRedis = require('connect-redis');
import morgan = require('morgan');
import MobileDetect = require('mobile-detect');

import params from './global/params';

const RedisStore = connectRedis(session);
const app = express();
app.use(morgan('dev'));

// mode : dev? production?
params.mode = app.settings.env;
app.set('views', path.join(__dirname, '../html'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use(cookieParser());

// app.use(
//   session({
//     store: new RedisStore({
//         host: 'localhost',
//         port: '6379',
//     }),
//     secret: '' + new Date().getTime(),
//     cookie: {secure: false},
//     resave: true,
//     saveUninitialized: true,
// }));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../dist')));

// angular2 page
app.get('/home', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
});

// other api routers go here
app.use('/', router_general);
// app.use('/api/dooboo', dooboo);

// cooni api routers
app.use('/api/auth', router_auth);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  // err.status = 404;

  const md = new MobileDetect(req.headers['user-agent']);
  console.log('Accessed mobile : ' + md.mobile());
  if (md.mobile() === null) {
    // redirect to webpage if accessed from not mobile
    res.redirect('/404');
    return;
  }
  next(err);
});

// error handlers
app.use(function(err, req, res, next) {
  console.log(err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // res.status(err.status || 500);
  // res.render('error');
  res.json({
    resCode : 500,
    message : err.message,
  });
});

const PORT = 3000;

app.listen(PORT, function() {
  console.log(`Running on port ${PORT} in ${params.mode} mode`);
});

export default app;

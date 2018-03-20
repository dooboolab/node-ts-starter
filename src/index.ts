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

class App {
  private _express: express.Application;
  private _redisStore: any;

  constructor() {
    this._express = express();
    this.middleware();
    this.routes();
  }

  public get express(): express.Application {
    return this._express;
  }

  public set express(value: express.Application) {
    this._express = value;
  }

  public get redisStore(): any {
    return this._redisStore;
  }

  public set redisStore(value: any) {
    this._redisStore = value;
  }

  private normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  }

  private middleware(): void {
    const RedisStore = connectRedis(session);
    this._express.use(morgan('dev'));
    this._express.set('views', path.join(__dirname, '../html'));
    this._express.engine('html', ejs.renderFile);
    this._express.set('view engine', 'html');
    
    this._express.use(bodyParser.json({ limit: '100mb' }));
    this._express.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
    this._express.use(cookieParser());
    // this._express.use(
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
    
    this._express.use(express.static(path.join(__dirname, '../public')));
    this._express.use(express.static(path.join(__dirname, '../dist')));
  }

  private routes(): void {
    // homepage
    this._express.get('/home', function(req, res) {
      res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
    });
    
    // other api routers go here
    this._express.use('/', router_general);
    this._express.use('/api/auth', router_auth);

    // catch 404 and forward to error handler
    this._express.use(function(req, res, next) {
      res.redirect('/404');
      // next();
    });
    
    // error handlers
    this._express.use(function(err, req, res, next) {
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

    const port = this.normalizePort(process.env.port || 3000);
    this._express.listen(port, function() {
      console.log(`Running on port ${port} in ${process.env.NODE_ENV} mode`);
    });
  }
}

export const app = new App().express;

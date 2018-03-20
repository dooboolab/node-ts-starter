"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const general_1 = require("./routers/general");
const auth_1 = require("./routers/apis/auth");
const express = require("express");
const ejs = require("ejs");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const connectRedis = require("connect-redis");
const morgan = require("morgan");
class App {
    constructor() {
        this._express = express();
        this.middleware();
        this.routes();
    }
    get express() {
        return this._express;
    }
    set express(value) {
        this._express = value;
    }
    get redisStore() {
        return this._redisStore;
    }
    set redisStore(value) {
        this._redisStore = value;
    }
    normalizePort(val) {
        const port = parseInt(val, 10);
        if (isNaN(port)) {
            return val;
        }
        if (port >= 0) {
            return port;
        }
        return false;
    }
    middleware() {
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
    routes() {
        // homepage
        this._express.get('/home', function (req, res) {
            res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
        });
        // other api routers go here
        this._express.use('/', general_1.default);
        this._express.use('/api/auth', auth_1.default);
        // catch 404 and forward to error handler
        this._express.use(function (req, res, next) {
            res.redirect('/404');
            // next();
        });
        // error handlers
        this._express.use(function (err, req, res, next) {
            console.log(err);
            // set locals, only providing error in development
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};
            // render the error page
            // res.status(err.status || 500);
            // res.render('error');
            res.json({
                resCode: 500,
                message: err.message,
            });
        });
        const port = this.normalizePort(process.env.port || 3000);
        this._express.listen(port, function () {
            console.log(`Running on port ${port} in ${process.env.NODE_ENV} mode`);
        });
    }
}
exports.app = new App().express;
//# sourceMappingURL=index.js.map
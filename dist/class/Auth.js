"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Result_1 = require("./Result");
const statusCode_1 = require("../config/statusCode");
const jwt = require("jsonwebtoken");
const compose = require("composable-middleware");
const SECRET = 'doobolab secret';
const EXPIRES = 1440 * 24 * 100; // 100day
class Auth {
    // JWT 토큰 생성 함수
    signToken(payLoad) {
        return jwt.sign(payLoad, SECRET, {
            algorithm: 'HS256',
            expiresIn: EXPIRES,
        });
    }
    // 토큰을 해석하여 유저 정보를 얻는 함수
    isAuthenticated() {
        return compose()
            .use((req, res, next) => {
            const result = new Result_1.default();
            if (!req.headers.authorization) {
                result.message = 'No authorization.';
                console.log(result.message);
                result.status = statusCode_1.default.BAD_REQUEST;
                res.json(result);
                return;
            }
            jwt.verify(req.headers.authorization, SECRET, (err, decoded) => {
                if (err) {
                    console.log('jwt verify error.');
                    result.message = err;
                    console.log(result.message);
                    result.status = statusCode_1.default.ERROR;
                    res.json(result);
                    return;
                }
                else {
                    req.user = {
                        id: decoded.id,
                        locale: decoded.locale ? decoded.locale : 'kr',
                        token: undefined,
                    };
                    const date = new Date();
                    date.setMonth(date.getMonth() - 3);
                    console.log('time : ' + date.getTime() / 1000);
                    console.log('exp : ' + decoded.exp);
                    if (decoded.exp < date.getTime() / 1000) {
                        // 새로운 토큰 발급
                        req.user.token = this.signToken(req.user);
                        console.log('new token!!!');
                    }
                    // console.log('id : ' + JSON.stringify(decoded));
                    return next();
                }
            });
        });
    }
}
exports.default = Auth;
//# sourceMappingURL=Auth.js.map
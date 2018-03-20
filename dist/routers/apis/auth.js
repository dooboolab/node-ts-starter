"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sha256 = require("sha256");
const statusCode_1 = require("../../config/statusCode");
const Result_1 = require("../../class/Result");
const FlakeIdgen = require("flake-idgen");
const Auth_1 = require("../../class/Auth");
const User_1 = require("../../models/User");
const auth = new Auth_1.default();
const flakeId = new FlakeIdgen();
class AuthRouter {
    constructor() {
        this._router = express_1.Router();
        this.init();
    }
    get router() {
        return this._router;
    }
    set router(value) {
        this._router = value;
    }
    init() {
        this._router
            .get('/test', this.onTest)
            .post('/login', this.onLogin);
    }
    onTest(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = new Result_1.default();
            result.status = statusCode_1.default.SUCCESS;
            res.json(result);
        });
    }
    onLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = new Result_1.default();
            const email = req.body.email;
            const locale = req.body.locale ? req.body.locale.toString().toLowerCase() : 'kr';
            let pw = req.body.pw;
            if (!email || !pw) {
                result.message = 'req params are missing';
                result.status = statusCode_1.default.BAD_REQUEST;
                res.json(result);
                return;
            }
            try {
                pw = sha256(pw);
                const user = yield User_1.default.findOne({ where: { email, pw, visible: false }, raw: true });
                if (!user) {
                    console.log('user is zero');
                    result.message = 'user is zero';
                    result.status = statusCode_1.default.NO_CONTENT;
                    // res.json(result);
                    res.json(result);
                    return;
                }
                const payLoad = {
                    id: user._id,
                    type: 'email',
                };
                result.message = 'user found';
                const token = auth.signToken(payLoad);
                result.value = { token };
                console.log('result : ' + result);
                result.status = statusCode_1.default.SUCCESS;
                res.json(result);
                return;
            }
            catch (err) {
                result.message = err;
                result.status = statusCode_1.default.ERROR;
                res.json(result);
                return;
            }
        });
    }
    ;
}
const authRouter = new AuthRouter();
authRouter.init();
const router = authRouter.router;
exports.default = router;
//# sourceMappingURL=auth.js.map
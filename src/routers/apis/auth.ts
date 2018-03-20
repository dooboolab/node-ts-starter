import { Router, Request, Response } from 'express';
import sha256 = require('sha256');
import jwt = require('jsonwebtoken');
import intformat = require('biguint-format');
import nodemailer = require('nodemailer');
import multer = require('multer');
import fs = require('fs');

import statusCode from '../../config/statusCode';
import Result from '../../class/Result';
import FlakeIdgen = require('flake-idgen');
import Auth from '../../class/Auth';
import localizations from '../../config/localizations';

import User from '../../models/User';

const auth = new Auth();
const flakeId = new FlakeIdgen();

class AuthRouter {
  private _router: Router;

  constructor() {
    this._router = Router();
    this.init();
  }

  public get router(): Router {
    return this._router;
  }

  public set router(value: Router) {
    this._router = value;
  }

  public init() {
    this._router
      .get('/test', this.onTest)
      .post('/login', this.onLogin)
    ;
  }

  public async onTest(req: Request, res: Response) {
    const result = new Result();
    result.status = statusCode.SUCCESS;
    res.json(result);
  }

  public async onLogin(req: Request, res: Response) {
    const result = new Result();
    const email: string = req.body.email;
    const locale = req.body.locale ? req.body.locale.toString().toLowerCase() : 'kr';
    let pw: string = req.body.pw;
    if (!email || !pw) {  // email이랑 pw로 로그인한 경우
      result.message = 'req params are missing';
      result.status = statusCode.BAD_REQUEST;
      res.json(result);
      return;
    }
    try {
      pw = sha256(pw);
      const user: any = await User.findOne({ where: { email, pw, visible: false }, raw: true });
      if (!user) {
        console.log('user is zero');
        result.message = 'user is zero';
        result.status = statusCode.NO_CONTENT;
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
      result.status = statusCode.SUCCESS;
      res.json(result);
      return;
    } catch (err) {
      result.message = err;
      result.status = statusCode.ERROR;
      res.json(result);
      return;
    }
  };
}

const authRouter = new AuthRouter();
authRouter.init();
const router = authRouter.router;

export default router;

import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../src';
import statusCode from '../src/config/statusCode';

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /api/auth/test', () => {
  describe('SUCCESS', () => {
    it('responds with 200', () => {
      return chai.request(app).get('/api/auth/test')
        .then((res) => {
          expect(res.status).to.equal(statusCode.SUCCESS);
        });
    });
  });
});

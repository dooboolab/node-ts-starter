import request = require('supertest');
import should = require('should');

import statusCode from '../config/statusCode';
import app from '../index';

describe('GET /api/auth는', () => {
  describe('성공시', () => {
    it('JSON 응답 성공', (done) => {
      request(app)
        .get('/api/auth')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(statusCode.SUCCESS)
        .end((err, res) => {
          should(res.body).be.instanceOf(Object);
          console.log(res.text);
          done();
        });
    });
  });
});

describe('POST /api/auth/login', () => {
  describe('성공시', () => {
    it('204 상태코드를 반환한다', (done) => {
      request(app)
        .post('/api/auth/login')
        .send({ email: 'aa@aa.aa', pw: 'aa' })
        .expect(statusCode.NO_CONTENT)
        .end((err, res) => {
          should(res.body).be.instanceOf(Object);
          console.log(res.text);
          done();
        });
    });
  });
});

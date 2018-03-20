"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("supertest");
const should = require("should");
const statusCode_1 = require("../config/statusCode");
const index_1 = require("../index");
describe('GET /api/auth는', () => {
    describe('성공시', () => {
        it('JSON 응답 성공', (done) => {
            request(index_1.default)
                .get('/api/auth')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(statusCode_1.default.SUCCESS)
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
            request(index_1.default)
                .post('/api/auth/login')
                .send({ email: 'aa@aa.aa', pw: 'aa' })
                .expect(statusCode_1.default.NO_CONTENT)
                .end((err, res) => {
                should(res.body).be.instanceOf(Object);
                console.log(res.text);
                done();
            });
        });
    });
});
//# sourceMappingURL=auth.spec.js.map
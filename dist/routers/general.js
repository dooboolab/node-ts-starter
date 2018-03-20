"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const statusCode_1 = require("../config/statusCode");
const Result_1 = require("../class/Result");
const router = express_1.Router();
const onNotFound = function (req, res) {
    const result = new Result_1.default();
    result.message = 'Page not found';
    result.status = statusCode_1.default.NOT_FOUND;
    res.json(result);
    return;
};
const onDaumAddress = function (req, res) {
    res.render('daum_address', { title: 'Daum Address' });
};
router
    .get('/404', onNotFound)
    .get('/daum_address', onDaumAddress);
exports.default = router;
//# sourceMappingURL=general.js.map
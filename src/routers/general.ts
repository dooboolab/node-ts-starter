import { Router } from 'express';
import statusCode from '../config/statusCode';
import Result from '../class/Result';

const router = Router();

const onNotFound = function(req, res) {
  const result = new Result();
  result.message = 'Page not found';
  result.status = statusCode.NOT_FOUND;

  res.json(result);
  return;
};

const onDaumAddress = function(req, res) {
  res.render('daum_address', { title: 'Daum Address' });
};

router
  .get('/404', onNotFound)
  .get('/daum_address', onDaumAddress)
;

export default router;

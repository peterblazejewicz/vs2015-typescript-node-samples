'use strict';

import * as express from 'express';
export const router = express.Router();

/* GET users listing. */
router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.send('respond with a resource');
});

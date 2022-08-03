import * as express from 'express';
import carsRouter from './carsRouter';

const router = express.Router();

router.use('/cars', carsRouter);

export default router;

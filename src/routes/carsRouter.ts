import { Router } from 'express';
import CarsController from '../controllers/Cars';
import CarsModel from '../models/Cars';
import CarsService from '../services/Cars';
import { validateBody, validateQty, validateTypes, validateTypes2 }
  from '../middlewares/carMiddleware';

const route = Router();

const cars = new CarsModel();
const carsService = new CarsService(cars);
const carsController = new CarsController(carsService);

route.post(
  '/',
  validateBody,
  validateQty,
  validateTypes,
  validateTypes2,
  (req, res) => carsController.create(req, res),
);

route.get('/', (req, res) => carsController.readAll(req, res));

export default route;
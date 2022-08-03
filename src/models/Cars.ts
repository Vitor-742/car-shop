import MongoModel from './MongoModel';
import carModel from '../schemas/Car';
import { ICar } from '../interfaces/ICar';

class Car extends MongoModel<ICar> {
  constructor(model = carModel) {
    super(model);
  }
}

export default Car;
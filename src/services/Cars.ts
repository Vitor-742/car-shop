import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

class CarsService implements IService<ICar> {
  private _cars:IModel<ICar>;
  constructor(model:IModel<ICar>) {
    this._cars = model;
  }

  public async create(obj:ICar):Promise<ICar> {
    return this._cars.create(obj);
  }
}

export default CarsService;
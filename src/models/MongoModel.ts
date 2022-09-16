import { isValidObjectId, Model } from 'mongoose';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected _model:Model<T>;

  constructor(model:Model<T>) {
    this._model = model;
  }

  public async create(obj:T):Promise<T> {
    return this._model.create({ ...obj });
  }

  public async readOne(_id:string):Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
    return this._model.findOne({ _id });
  }

  public async read():Promise<T[]> {
    return this._model.find();
  }

  public async update(data: string, obj: T):Promise<T | null> {
    return this._model.create({ ...obj });
  }

  public async delete(data: string):Promise<T | null> {
    return this._model.remove(data);
  }
}

export default MongoModel;
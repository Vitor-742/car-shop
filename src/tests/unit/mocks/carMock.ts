import { ICar } from "../../../interfaces/ICar";

const CarMock:ICar = {
  model: 'ferrari',
  year: 2020,
  color: 'red',
  buyValue: 20,
  doorsQty: 2,
  seatsQty: 2,
};

const CarMockWithId:ICar & { _id:string } = {
  _id: '1',
  model: 'ferrari',
  year: 2020,
  color: 'red',
  buyValue: 20,
  doorsQty: 2,
  seatsQty: 2,
};

export { CarMock, CarMockWithId };
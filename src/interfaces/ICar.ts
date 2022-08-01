import { IVehicle } from './IVehicle';

export interface ICar extends IVehicle {
  model: string
  year: number
  color: string
  status?: boolean
  buyValue: number
  doorsQty: number
  seatsQty: number
}
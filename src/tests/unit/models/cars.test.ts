import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/Cars';
const { expect } = chai;
import { CarMockWithId, CarMock } from '../mocks/carMock'

describe('endpoint /cars', () => {
    const carModel = new CarModel()

  before(async () => {
    sinon
      .stub(carModel, 'create')
      .resolves(CarMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  describe('caso a requisicao seja feita corretamente', () => {
    it('retorna corretamente', async () => {
        const newCar = await carModel.create(CarMock)
        expect(newCar).to.be.equal(CarMockWithId)
    });
  })

//   describe('caso a requisicao nao contenha os dados corretos', async () => {
//       it('caso nao seja passado color', async () => {

//       })
//   })


  

});
import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import { CarMock, CarMockWithId } from '../mocks/carMock';
import CarsController from '../../../controllers/Cars';
import CarsService from '../../../services/Cars';
import CarsModel from '../../../models/Cars';


describe('Frame Controller', () => {
  const carsModel = new CarsModel()
  const carsService = new CarsService(carsModel);
  const carsController = new CarsController(carsService);
  // fazemos o cast de um objeto para um `Request` pois nosso controller só vai aceitar um objeto do tipo `Request` como primeiro parâmetro
  const req = {} as Request; 
  // o mesmo acontece com o segundo parâmetro
  const res = {} as Response;

  before(() => {
    sinon.stub(carsService, 'create').resolves(CarMock);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore()
  })

  describe('Create car', () => {
    it('Success', async () => {
      req.body = CarMock;
      await carsController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(CarMock)).to.be.true;
    });
  });
});
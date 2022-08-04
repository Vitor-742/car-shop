// template para criação dos testes de cobertura da camada de service


// import * as sinon from 'sinon';
// import chai from 'chai';
// const { expect } = chai;

// describe('Sua descrição', () => {

//   before(async () => {
//     sinon
//       .stub()
//       .resolves();
//   });

//   after(()=>{
//     sinon.restore();
//   })

//   it('', async () => {});

// });

import { expect } from 'chai';
import * as sinon from 'sinon';
import CarsModel from '../../../models/Cars';
import CarsService from '../../../services/Cars';
import { CarMock, CarMockWithId } from '../mocks/carMock';

describe('endpoint /cars service', () => {
	const carsModel = new CarsModel();
	const carsService = new CarsService(carsModel);

	before(() => {
		sinon.stub(carsModel, 'create').resolves(CarMockWithId);
		// sinon.stub(frameModel, 'readOne')
			// .onCall(0).resolves(frameMockWithId) 
			// .onCall(1).resolves(null); 
	})
	after(() => {
		sinon.restore()
	})
	describe('caso a requisicao seja feita corretamente', async () => {
        const result = await carsService.create(CarMock)

        expect(result).to.be.equal(CarMockWithId)
    });
});
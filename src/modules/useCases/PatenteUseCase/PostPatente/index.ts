import { DataBasePatenteRepository } from '../../../repositories/implementations/DataBasePatenteRepository';
import { CreatePatenteController } from './PostPatenteController';
import { CreatePatenteUseCase } from './PostPatenteUseCase';

const dataBasePatenteRepository = new DataBasePatenteRepository();

const createPatenteUseCase = new CreatePatenteUseCase(
  dataBasePatenteRepository,
);

const createPatenteController = new CreatePatenteController(
  createPatenteUseCase,
);

export { CreatePatenteController, createPatenteController };

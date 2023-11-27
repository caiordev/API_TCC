import { DataBasePatenteRepository } from '../../../repositories/implementations/DataBasePatenteRepository';
import { GetByIdPatenteController } from './GetByIdPatenteController';
import { GetByIdPatenteUseCase } from './GetByIdPatenteUseCase';

const dataBasePatenteRepository = new DataBasePatenteRepository();
const getByIdPatenteUseCase = new GetByIdPatenteUseCase(
  dataBasePatenteRepository,
);
const getByIdPatenteController = new GetByIdPatenteController(
  getByIdPatenteUseCase,
);

export { GetByIdPatenteController, getByIdPatenteController };

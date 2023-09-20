import { DataBasePatenteRepository } from '../../../repositories/implementations/DataBasePatenteRepository';
import { DeletePatenteController } from './DeletePatenteController';
import { DeletePatenteUseCase } from './DeletePatenteUseCase';

const dataBasePatenteRepository = new DataBasePatenteRepository();
const deletePatenteUseCase = new DeletePatenteUseCase(
  dataBasePatenteRepository,
);
const deletePatenteController = new DeletePatenteController(
  deletePatenteUseCase,
);

export { DeletePatenteController, deletePatenteController };

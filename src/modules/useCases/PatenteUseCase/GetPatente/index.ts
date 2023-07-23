import { DataBasePatenteRepository } from '../../../repositories/implementations/DataBasePatenteRepository';
import { GetPatenteController } from './GetPatenteController';
import { GetPatenteUseCase } from './GetPatenteUseCase';

const dataBasePatenteRepository = new DataBasePatenteRepository();
const getPatenteUseCase = new GetPatenteUseCase(dataBasePatenteRepository);
const getPatenteController = new GetPatenteController(getPatenteUseCase);

export { GetPatenteController, getPatenteController };

import { DataBaseExameRepository } from '../../../repositories/implementations/DataBaseExameRepository';
import { DeleteExameController } from './DeleteExameController';
import { DeleteExameUseCase } from './DeleteExameUseCase';

const dataBaseExameRepository = new DataBaseExameRepository();
const deleteExameUseCase = new DeleteExameUseCase(dataBaseExameRepository);
const deleteExameController = new DeleteExameController(deleteExameUseCase);

export { DeleteExameController, deleteExameController };

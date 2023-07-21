import { DataBaseExameRepository } from '../../../repositories/implementations/DataBaseExameRepository';
import { CreateExameController } from './PostExameController';
import { CreateExameUseCase } from './PostExameUseCase';

const dataBaseExameRepository = new DataBaseExameRepository();
const createExameUseCase = new CreateExameUseCase(dataBaseExameRepository);
const createExameController = new CreateExameController(createExameUseCase);

export { CreateExameController, createExameController };

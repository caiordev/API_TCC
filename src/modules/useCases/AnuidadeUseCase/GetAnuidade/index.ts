import { DataBaseAnuidadeRepository } from '../../../repositories/implementations/DataBaseAnuidadeRepository';
import { GetAnuidadeUseCase } from './GetAnuidadeUseCase';
import { GetAnuidadeController } from './GetAnuidadeController';

const dataBaseAnuidadeRepository = new DataBaseAnuidadeRepository();
const getAnuidadeUseCase = new GetAnuidadeUseCase(dataBaseAnuidadeRepository);
const getAnuidadeController = new GetAnuidadeController(getAnuidadeUseCase);

export { GetAnuidadeController, getAnuidadeController };

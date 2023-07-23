import { DataBaseExameRepository } from '../../../repositories/implementations/DataBaseExameRepository';
import { GetExameUseCase } from './GetExameUseCase';
import { GetExameController } from './GetExameController';

const dataBaseAnuidadeRepository = new DataBaseExameRepository();
const getExameUseCase = new GetExameUseCase(dataBaseAnuidadeRepository);
const getExameController = new GetExameController(getExameUseCase);

export { GetExameController, getExameController };

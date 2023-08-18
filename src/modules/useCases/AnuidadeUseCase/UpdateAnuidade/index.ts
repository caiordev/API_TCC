import { DataBaseAnuidadeRepository } from '../../../repositories/implementations/DataBaseAnuidadeRepository';
import { UpdateAnuidadeController } from './UpdateAnuidadeController';
import { UpdateAnuidadeUseCase } from './UpdateAnuidadeUseCase';

const dataBaseAnuidadeRepository = new DataBaseAnuidadeRepository();
const updateAnuidadeUseCase = new UpdateAnuidadeUseCase(
  dataBaseAnuidadeRepository,
);
const updateAnuidadeController = new UpdateAnuidadeController(
  updateAnuidadeUseCase,
);

export { UpdateAnuidadeController, updateAnuidadeController };

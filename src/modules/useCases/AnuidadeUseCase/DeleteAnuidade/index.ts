import { DataBaseAnuidadeRepository } from '../../../repositories/implementations/DataBaseAnuidadeRepository';
import { DeleteAnuidadeController } from './DeleteAnuidadeController';
import { DeleteAnuidadeUseCase } from './DeleteAnuidadeUseCase';

const dataBaseAnuidadeRepository = new DataBaseAnuidadeRepository();

const deleteAnuidadeUseCase = new DeleteAnuidadeUseCase(
  dataBaseAnuidadeRepository,
);

const deleteAnuidadeController = new DeleteAnuidadeController(
  deleteAnuidadeUseCase,
);

export { DeleteAnuidadeController, deleteAnuidadeController };

import { DataBaseAnuidadeRepository } from '../../../repositories/implementations/DataBaseAnuidadeRepository';
import { CreateAnuidadeController } from './PostAnuidadeController';
import { CreateAnuidadeUseCase } from './PostAnuidadeUseCase';

const dataBaseAnuidadeRepository = new DataBaseAnuidadeRepository();

const createAnuidadeUseCase = new CreateAnuidadeUseCase(
  dataBaseAnuidadeRepository,
);

const createAnuidadeController = new CreateAnuidadeController(
  createAnuidadeUseCase,
);

export { CreateAnuidadeController, createAnuidadeController };

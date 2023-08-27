import { DataBaseCumprimentoExigenciaRepository } from '../../../repositories/implementations/DataBaseCumprimentoExigenciaRepository';
import { PostCumprimentoController } from './PostCumprimentoController';
import { PostCumprimentoUseCase } from './PostCumprimentoUseCase';

const dataBaseCumprimentoExigenciaRepository =
  new DataBaseCumprimentoExigenciaRepository();
const postCumprimentoUseCase = new PostCumprimentoUseCase(
  dataBaseCumprimentoExigenciaRepository,
);
const postCumprimentoController = new PostCumprimentoController(
  postCumprimentoUseCase,
);

export { PostCumprimentoController, postCumprimentoController };

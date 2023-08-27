import { DataBaseCumprimentoExigenciaRepository } from '../../../repositories/implementations/DataBaseCumprimentoExigenciaRepository';
import { DeleteCumprimentoController } from './DeleteCumprimentoController';
import { DeleteCumprimentoUseCase } from './DeleteCumprimentoUseCase';

const dataBaseCumprimentoExigenciaRepository =
  new DataBaseCumprimentoExigenciaRepository();

const deleteCumprimentoUseCase = new DeleteCumprimentoUseCase(
  dataBaseCumprimentoExigenciaRepository,
);

const deleteCumprimentoController = new DeleteCumprimentoController(
  deleteCumprimentoUseCase,
);

export { DeleteCumprimentoController, deleteCumprimentoController };

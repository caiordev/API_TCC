import { DataBaseCumprimentoExigenciaRepository } from '../../../repositories/implementations/DataBaseCumprimentoExigenciaRepository';
import { GetCumprimentoController } from './GetCumprimentoController';
import { GetCumprimentoUseCase } from './GetCumprimentoUseCase';

const dataBaseCumprimentoExigencia =
  new DataBaseCumprimentoExigenciaRepository();
const getCumprimentoUseCase = new GetCumprimentoUseCase(
  dataBaseCumprimentoExigencia,
);
const getCumprimentoController = new GetCumprimentoController(
  getCumprimentoUseCase,
);

export { GetCumprimentoController, getCumprimentoController };

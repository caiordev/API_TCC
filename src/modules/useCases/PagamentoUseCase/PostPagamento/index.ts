import { DataBasePagamentoRepository } from '../../../repositories/implementations/DataBasePagamentoRepository';
import { CreatePagamentoController } from './PostPagamentoController';
import { CreatePagamentoUseCase } from './PostPagamentoUseCase';

const dataBasePagamentoRepository = new DataBasePagamentoRepository();

const createPagamentoUseCase = new CreatePagamentoUseCase(
  dataBasePagamentoRepository,
);

const createPagamentoController = new CreatePagamentoController(
  createPagamentoUseCase,
);

export { CreatePagamentoController, createPagamentoController };

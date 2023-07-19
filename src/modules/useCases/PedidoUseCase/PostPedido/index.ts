import { DataBasePedidoRepository } from '../../../repositories/implementations/DataBasePedidoRepository';
import { CreatePedidoController } from './PostPedidoController';
import { CreatePedidoUseCase } from './PostPedidoUseCase';

const dataBasePedidoRepository = new DataBasePedidoRepository();

const createPedidoUseCase = new CreatePedidoUseCase(dataBasePedidoRepository);

const createPedidoController = new CreatePedidoController(createPedidoUseCase);

export { CreatePedidoController, createPedidoController };

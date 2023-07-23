import { DataBasePedidoRepository } from '../../../repositories/implementations/DataBasePedidoRepository';
import { GetPedidoController } from './GetPedidoController';
import { GetPedidoUseCase } from './GetPedidoUseCase';

const dataBasePedidoRepository = new DataBasePedidoRepository();

const getPedidoUseCase = new GetPedidoUseCase(dataBasePedidoRepository);

const getPedidoController = new GetPedidoController(getPedidoUseCase);

export { GetPedidoController, getPedidoController };

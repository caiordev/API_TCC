import { DataBasePedidoRepository } from '../../../repositories/implementations/DataBasePedidoRepository';
import { DeletePedidoController } from './DeletePedidoController';
import { DeletePedidoUseCase } from './DeletePedidoUseCase';

const dataBassePedidoRepository = new DataBasePedidoRepository();
const deletePedidoUseCase = new DeletePedidoUseCase(dataBassePedidoRepository);
const deletePedidoController = new DeletePedidoController(deletePedidoUseCase);
export { DeletePedidoController, deletePedidoController };

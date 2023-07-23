import { IPedidoRepository } from '../../../repositories/IPedidoRepository';

export class GetPedidoUseCase {
  constructor(private pedidoRepository: IPedidoRepository) {}

  async execute() {
    const listPedido = await this.pedidoRepository.getPedido();
    return listPedido;
  }
}

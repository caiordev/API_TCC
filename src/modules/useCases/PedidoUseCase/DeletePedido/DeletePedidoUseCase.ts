import { IPedidoRepository } from '../../../repositories/IPedidoRepository';

interface IPedidoRequest {
  ID: string;
}
export class DeletePedidoUseCase {
  constructor(private pedidoRepository: IPedidoRepository) {}

  async execute({ ID }: IPedidoRequest) {
    const pedidoDeletado = await this.pedidoRepository.deletePatente(ID);
    return pedidoDeletado;
  }
}

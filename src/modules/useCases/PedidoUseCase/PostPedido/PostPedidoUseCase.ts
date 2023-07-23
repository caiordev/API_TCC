import { Pedido } from '../../../entities/Pedido';
import { IPedidoRepository } from '../../../repositories/IPedidoRepository';

interface IPedidoRequest {
  ID?: string;
  ID_PATENTE: string;
  VALOR: number;
  Codigo: number;
  DataPag: Date;
  ProcessoSei: number;
}

class CreatePedidoUseCase {
  constructor(private pedidoRepository: IPedidoRepository) {}

  async execute({
    ID,
    ID_PATENTE,
    VALOR,
    Codigo,
    DataPag,
    ProcessoSei,
  }: IPedidoRequest) {
    const pedidoAlreadyExists = await this.pedidoRepository.findById(ID);

    if (pedidoAlreadyExists) {
      throw new Error('User already exists!');
    }

    const pedido = new Pedido({
      ID_PATENTE,
      VALOR,
      Codigo,
      DataPag,
      ProcessoSei,
    });

    await this.pedidoRepository.save(pedido);

    return pedido;
  }
}

export { CreatePedidoUseCase };

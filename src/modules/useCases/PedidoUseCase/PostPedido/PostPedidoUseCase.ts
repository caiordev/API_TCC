import { Pedido } from '../../../entities/Pedido';
import { IPedidoRepository } from '../../../repositories/IPedidoRepository';
import AppError from '../../../../shared/http/errors/AppError';

interface IPedidoRequest {
  ID: string;
  VALOR: number;
}

class CreatePedidoUseCase {
  constructor(private pedidoRepository: IPedidoRepository) {}

  async execute({ ID, VALOR }: IPedidoRequest) {
    const pedidoAlreadyExists = await this.pedidoRepository.findById(ID);

    if (pedidoAlreadyExists) {
      throw new AppError('User already exists!');
    }

    const pedido = new Pedido({
      VALOR,
    });

    await this.pedidoRepository.save(pedido);

    return pedido;
  }
}

export { CreatePedidoUseCase };

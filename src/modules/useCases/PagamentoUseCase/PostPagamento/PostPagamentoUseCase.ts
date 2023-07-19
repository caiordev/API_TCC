import { Pagamento } from '../../../entities/Pedido';
import { IPagamentoRepository } from '../../../repositories/IPagamentoRepository';
import AppError from '../../../../shared/http/errors/AppError';

interface IPagamentoRequest {
  ID?: string;
  VALOR: number;
}

class CreatePagamentoUseCase {
  constructor(private pagamentoRepository: IPagamentoRepository) {}

  async execute({ ID, VALOR }: IPagamentoRequest) {
    const pagamentoAlreadyExists = await this.pagamentoRepository.findById(ID);

    if (pagamentoAlreadyExists) {
      throw new AppError('User already exists!');
    }

    const pagamento = new Pagamento({
      VALOR,
    });

    await this.pagamentoRepository.save(pagamento);

    return pagamento;
  }
}

export { CreatePagamentoUseCase };

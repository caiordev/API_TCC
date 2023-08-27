import { CumprimentoExigencia } from '../../../entities/CumprimentoExigencia';
import { ICumprimentoExigenciaRepository } from '../../../repositories/ICumprimentoExigenciaRepository';
import { DataBaseCumprimentoExigenciaRepository } from '../../../repositories/implementations/DataBaseCumprimentoExigenciaRepository';

interface ICumprimentoRequest {
  ID?: string;
  ID_PATENTE: string;
  VALOR: number;
  SERVICO: string;
  PRAZO: Date;
  PAGAMENTO: Date;
  PROCESSOSEI: number;
  TIPO: string;
}

export class PostCumprimentoUseCase {
  constructor(
    private cumprimentoExigenciaRepository: ICumprimentoExigenciaRepository,
  ) {}

  async execute({
    ID,
    ID_PATENTE,
    VALOR,
    SERVICO,
    PRAZO,
    PAGAMENTO,
    PROCESSOSEI,
    TIPO,
  }: ICumprimentoRequest) {
    const cumprimentoAlreadyExits =
      await this.cumprimentoExigenciaRepository.findById(ID);

    if (cumprimentoAlreadyExits) {
      throw new Error('User already exists!');
    }

    const cumprimento = new CumprimentoExigencia({
      ID_PATENTE,
      PAGAMENTO,
      PRAZO,
      PROCESSOSEI,
      SERVICO,
      TIPO,
      VALOR,
    });

    await this.cumprimentoExigenciaRepository.save(cumprimento);
    return cumprimento;
  }
}

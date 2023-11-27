import { DataBaseConsultasRepository } from '../../../repositories/implementations/DataBaseConsultasRepository';

interface consultasRequest {
  TITULO?: string;
  STATUS?: string;
  DEPOSITO1?: string;
  DEPOSITO2?: string;
  PROTOCOLO?: number;
}

export class TesteUseCase {
  constructor(private consultasRepository: DataBaseConsultasRepository) {}

  async execute({
    TITULO,
    STATUS,
    DEPOSITO1,
    DEPOSITO2,
    PROTOCOLO,
  }: consultasRequest) {
    const consultado = this.consultasRepository.getPatente(
      STATUS,
      PROTOCOLO,
      DEPOSITO1,
      DEPOSITO2,
      TITULO,
    );
    if (!consultado) {
      throw new Error('não existe');
    }
    return consultado;
  }
}

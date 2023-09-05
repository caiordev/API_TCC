import { DataBaseConsultasRepository } from '../../../repositories/implementations/DataBaseConsultasRepository';

interface consultasRequest {
  TITULO?: string;
  STATUS?: string;
  DEPOSITO?: string;
  PROTOCOLO?: number;
}

export class TesteUseCase {
  constructor(private consultasRepository: DataBaseConsultasRepository) {}

  async execute({ TITULO, STATUS, DEPOSITO, PROTOCOLO }: consultasRequest) {
    const consultado = this.consultasRepository.getPatente(
      STATUS,
      PROTOCOLO,
      DEPOSITO,
      TITULO,
    );
    if (!consultado) {
      throw new Error('não existe');
    }
    return consultado;
  }
}

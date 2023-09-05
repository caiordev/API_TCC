import { DataBaseConsultasRepository } from '../../../repositories/implementations/DataBaseConsultasRepository';

interface consultasRequest {
  STATUS?: string;
  DATAINICIAL?: string;
  DATAFINAL?: string;
  PROTOCOLO?: number;
}

export class AnuidadeConsultaUseCase {
  constructor(private consultasRepository: DataBaseConsultasRepository) {}

  async execute({
    STATUS,
    DATAINICIAL,
    DATAFINAL,
    PROTOCOLO,
  }: consultasRequest) {
    const consultado = this.consultasRepository.getAnuidade(
      STATUS,
      DATAINICIAL,
      DATAFINAL,
      PROTOCOLO,
    );
    if (!consultado) {
      throw new Error('não existe');
    }
    return consultado;
  }
}

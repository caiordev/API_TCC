import { DataBaseConsultasRepository } from '../../../repositories/implementations/DataBaseConsultasRepository';

interface consultasRequest {
  TITULO: string;
}

export class TesteUseCase {
  constructor(private consultasRepository: DataBaseConsultasRepository) {}

  async execute({ TITULO }: consultasRequest) {
    const consultado = this.consultasRepository.getTest(TITULO);
    if (!consultado) {
      throw new Error('não existe');
    }
    return consultado;
  }
}

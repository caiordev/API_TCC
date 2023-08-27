import { ICumprimentoExigenciaRepository } from '../../../repositories/ICumprimentoExigenciaRepository';

interface ICumprimentoRequest {
  ID: string;
}

export class DeleteCumprimentoUseCase {
  constructor(private cumprimentoRepository: ICumprimentoExigenciaRepository) {}

  async execute({ ID }: ICumprimentoRequest) {
    const deleteCumprimento =
      this.cumprimentoRepository.deleteCumprimentoExigencia(ID);
    return deleteCumprimento;
  }
}

import { ICumprimentoExigenciaRepository } from '../../../repositories/ICumprimentoExigenciaRepository';

export class GetCumprimentoUseCase {
  constructor(
    private cumprimentoExigenciaRepository: ICumprimentoExigenciaRepository,
  ) {}

  async execute() {
    const listCumprimento =
      await this.cumprimentoExigenciaRepository.getCumprimentoExigencia();
    return listCumprimento;
  }
}

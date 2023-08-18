import { ICumprimentoExigenciaRepository } from '../../../repositories/ICumprimentoExigenciaRepository';

export class GetCumprimentoUseCase {
  constructor(
    private cumprimentoExigenciaRepository: ICumprimentoExigenciaRepository,
  ) {}

  async execute() {
    return await this.cumprimentoExigenciaRepository.getCumprimentoExigencia();
  }
}

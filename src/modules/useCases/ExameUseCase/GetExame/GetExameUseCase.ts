import { IExameRepository } from '../../../repositories/IExameRepository';

export class GetExameUseCase {
  constructor(private exameRepository: IExameRepository) {}

  async execute() {
    const listExame = await this.exameRepository.getExame();
    return listExame;
  }
}

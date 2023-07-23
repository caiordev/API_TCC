import { IAnuidadeRepository } from '../../../repositories/IAnuidadeRepository';

export class GetAnuidadeUseCase {
  constructor(private anuidadeRepository: IAnuidadeRepository) {}

  async execute() {
    const listAnuidade = await this.anuidadeRepository.getAnuidade();
    return listAnuidade;
  }
}

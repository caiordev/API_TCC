import { IAnuidadeRepository } from '../../../repositories/IAnuidadeRepository';

interface IAnuidadeRequest {
  ID: string;
}

export class DeleteAnuidadeUseCase {
  constructor(private anuidadeRepository: IAnuidadeRepository) {}

  async execute({ ID }: IAnuidadeRequest) {
    const deleteAnuidade = await this.anuidadeRepository.deleteAnuidade(ID);

    return deleteAnuidade;
  }
}

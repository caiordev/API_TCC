import { IExameRepository } from '../../../repositories/IExameRepository';
import { DataBaseExameRepository } from '../../../repositories/implementations/DataBaseExameRepository';

interface IExameRequest {
  ID: string;
}

export class DeleteExameUseCase {
  constructor(private exameRepository: IExameRepository) {}

  async execute({ ID }: IExameRequest) {
    const exame = await this.exameRepository.deleteExame(ID);
    return exame;
  }
}

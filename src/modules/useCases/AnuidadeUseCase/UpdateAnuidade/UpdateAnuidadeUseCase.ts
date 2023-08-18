import { IAnuidadeRepository } from '../../../repositories/IAnuidadeRepository';

interface IAnuidadeRequest {
  ID: string;
  DATAORD1: Date;
  DATAORD2: Date;
  CODIGOORD: number;
  VALORORD: number;
  DATAPAGAMENTOORD: Date;
  PROCESSOSEI: number;
}

export class UpdateAnuidadeUseCase {
  constructor(private anuidadeRepository: IAnuidadeRepository) {}

  async execute({
    ID,
    DATAORD1,
    DATAORD2,
    CODIGOORD,
    VALORORD,
    DATAPAGAMENTOORD,
    PROCESSOSEI,
  }: IAnuidadeRequest) {
    const updatedAnuidade = await this.anuidadeRepository.updateAnuidade(
      ID,
      DATAORD1,
      DATAORD2,
      CODIGOORD,
      VALORORD,
      DATAPAGAMENTOORD,
      PROCESSOSEI,
    );
    return updatedAnuidade;
  }
}

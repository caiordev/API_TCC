import { IAnuidadeRepository } from '../../../repositories/IAnuidadeRepository';
import { Anuidade } from '../../../entities/Anuidade';

interface IAnuidadeRequest {
  ID?: string;
  ID_PATENTE: string;
  DATAORD1: Date;
  DATAORD2: Date;
  CODIGOORD: number;
  VALORORD: number;
  DATAPAGAMENTOORD: Date;
  PROCESSOSEI: number;
  STATUS: string;
}

export class CreateAnuidadeUseCase {
  constructor(private anuidadeRepository: IAnuidadeRepository) {}

  async execute({
    ID,
    ID_PATENTE,
    DATAORD1,
    DATAORD2,
    CODIGOORD,
    VALORORD,
    DATAPAGAMENTOORD,
    PROCESSOSEI,
    STATUS,
  }: IAnuidadeRequest) {
    const anuidadeAlreadyExits = await this.anuidadeRepository.findById(ID);

    if (anuidadeAlreadyExits) {
      throw new Error('User already exists!');
    }

    const anuidade = new Anuidade({
      ID_PATENTE,
      DATAORD1,
      DATAORD2,
      CODIGOORD,
      VALORORD,
      DATAPAGAMENTOORD,
      PROCESSOSEI,
      STATUS,
    });

    await this.anuidadeRepository.save(anuidade);

    return anuidade;
  }
}

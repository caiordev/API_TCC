import { IAnuidadeRepository } from '../../../repositories/IAnuidadeRepository';
import { Anuidade } from '../../../entities/Anuidade';

interface IAnuidadeRequest {
  ID?: string;
  ID_PATENTE: string;
  DataOrd1: Date;
  DataOrd2: Date;
  CodigoOrd: number;
  ValorOrd: number;
  DataPagamentoOrd: Date;
  ProcessoSei: number;
}

class CreateAnuidadeUseCase {
  constructor(private anuidadeRepository: IAnuidadeRepository) {}

  async execute({
    ID,
    ID_PATENTE,
    DataOrd1,
    DataOrd2,
    CodigoOrd,
    ValorOrd,
    DataPagamentoOrd,
    ProcessoSei,
  }: IAnuidadeRequest) {
    const anuidadeAlreadyExits = await this.anuidadeRepository.findById(ID);

    if (anuidadeAlreadyExits) {
      throw new Error('User already exists!');
    }

    const anuidade = new Anuidade({
      ID_PATENTE,
      DataOrd1,
      DataOrd2,
      CodigoOrd,
      ValorOrd,
      DataPagamentoOrd,
      ProcessoSei,
    });

    await this.anuidadeRepository.save(anuidade);

    return anuidade;
  }
}

export { CreateAnuidadeUseCase };

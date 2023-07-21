import { Exame } from '../../../entities/Exame';
import { IExameRepository } from '../../../repositories/IExameRepository';

interface IExameRequest {
  ID?: string;
  ID_PATENTE: string;
  VALOR: number;
  SERVICO: string;
  PRAZO: Date;
  PAGAMENTO: Date;
  PROCESSOSEI: number;
  TIPO: string;
}

class CreateExameUseCase {
  constructor(private exameRepository: IExameRepository) {}

  async execute({
    ID,
    ID_PATENTE,
    VALOR,
    SERVICO,
    PRAZO,
    PAGAMENTO,
    PROCESSOSEI,
    TIPO,
  }: IExameRequest) {
    const exameAlreadyExists = await this.exameRepository.findById(ID);

    if (exameAlreadyExists) {
      throw new Error('Exame already exists!');
    }

    const exame = new Exame({
      ID_PATENTE,
      VALOR,
      SERVICO,
      PRAZO,
      PAGAMENTO,
      PROCESSOSEI,
      TIPO,
    });

    await this.exameRepository.save(exame);

    return exame;
  }
}

export { CreateExameUseCase };

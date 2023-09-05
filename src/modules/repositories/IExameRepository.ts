import { Exame } from '../entities/Exame';

export interface IExameRepository {
  getExame(): Promise<Exame[]>;
  save(exame: Exame): Promise<void>;
  findById(id: string): Promise<Exame>;
  updateExame(
    ID: string,
    VALOR: number,
    SERVICO: string,
    PRAZO: Date,
    PAGAMENTO: Date,
    PROCESSOSEI: number,
    TIPO: string,
    STATUS: string,
  ): Promise<Exame[]>;
  deleteExame(ID: string): Promise<Exame[]>;
}

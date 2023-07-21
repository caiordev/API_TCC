import { Exame } from '../entities/Exame';

export interface IExameRepository {
  getExame(): Promise<Exame[]>;
  save(exame: Exame): Promise<void>;
  findById(id: string): Promise<Exame>;
}

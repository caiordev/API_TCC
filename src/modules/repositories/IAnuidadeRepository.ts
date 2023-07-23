import { Anuidade } from '../entities/Anuidade';

export interface IAnuidadeRepository {
  save(anuidade: Anuidade): Promise<void>;
  getAnuidade(): Promise<Anuidade[]>;
  findById(ID: string): Promise<Anuidade>;
}

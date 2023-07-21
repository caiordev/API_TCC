import { Anuidade } from '../entities/Anuidade';

export interface IAnuidadeRepository {
  save(anuidade: Anuidade): Promise<void>;
  findById(ID: string): Promise<Anuidade>;
}

import { Anuidade } from '../entities/Anuidade';

export interface IAnuidadeRepository {
  save(pedido: Anuidade): Promise<void>;
  findById(ID: string): Promise<Anuidade>;
}

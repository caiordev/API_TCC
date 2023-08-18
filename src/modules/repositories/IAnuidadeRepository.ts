import { Anuidade } from '../entities/Anuidade';

export interface IAnuidadeRepository {
  save(anuidade: Anuidade): Promise<void>;
  getAnuidade(): Promise<Anuidade[]>;
  findById(ID: string): Promise<Anuidade>;
  updateAnuidade(
    ID: string,
    DATAORD1: Date,
    DATAORD2: Date,
    CODIGOORD: number,
    VALORORD: number,
    DATAPAGAMENTOORD: Date,
    PROCESSOSEI: number,
  ): Promise<Anuidade[]>;
  deleteAnuidade(ID: string): Promise<Anuidade[]>;
}

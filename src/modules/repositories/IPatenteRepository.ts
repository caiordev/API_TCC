import { Patente } from '../entities/Patente';

export interface IPatenteRepository {
  getPatente(): Promise<Patente[]>;
  findById(ID: string): Promise<Patente>;
  save(patente: Patente): Promise<void>;
  updatePatente(): Promise<Patente[]>;
  deletePatente(ID: string): Promise<Patente[]>;
}

import { Patente } from '../entities/Patente';

export interface IPatenteRepository {
  getPatente(): Promise<Patente[]>;
  findById(ID: string): Promise<Patente>;
  save(patente: Patente): Promise<void>;
  updatePatente(
    ID: string,
    PROTOCOLO: number,
    NATUREZA: string,
    DEPOSITO: Date,
    TITULO: string,
    INVENTORES: string,
    IPC: string,
    CPC: string,
    COTITULAR: string,
    QREIVIND: number,
    STATUS: string,
    PROCESSO: string,
    CONCESSAO: Date,
  ): Promise<Patente[]>;
  deletePatente(ID: string): Promise<Patente[]>;
}

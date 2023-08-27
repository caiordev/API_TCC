import knex from 'knex';
import { In } from 'typeorm';
import { Knex } from '../../../shared/database/knex';
import { Patente } from '../../entities/Patente';
import { IPatenteRepository } from '../IPatenteRepository';

export class DataBasePatenteRepository implements IPatenteRepository {
  public patentes: Patente[];

  async getPatente(): Promise<Patente[]> {
    this.patentes = await Knex('TABELA_PATENTE');
    return this.patentes;
  }

  async findById(id: string): Promise<Patente> {
    const patentes = await Knex('TABELA_PATENTE');
    const patente = patentes.find(e => {
      e.ID === id;
    });
    return patente;
  }

  async save(patente: Patente): Promise<void> {
    console.log('salvando patente');
    try {
      await Knex('TABELA_PATENTE').insert(patente);
    } catch (error) {
      console.error('Error while saving patente:', error);
    }
  }

  async updatePatente(
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
  ): Promise<Patente[]> {
    await Knex('TABELA_PATENTE')
      .update({
        PROTOCOLO: PROTOCOLO,
        NATUREZA: NATUREZA,
        DEPOSITO: DEPOSITO,
        TITULO: TITULO,
        INVENTORES: INVENTORES,
        IPC: IPC,
        CPC: CPC,
        COTITULAR: COTITULAR,
        QREIVIND: QREIVIND,
        STATUS: STATUS,
        PROCESSO: PROCESSO,
        CONCESSAO: CONCESSAO,
      })
      .where({ ID: ID });

    this.patentes = await Knex('TABELA_PATENTE');
    return this.patentes;
  }

  async deletePatente(ID: string): Promise<Patente[]> {
    await Knex('TABELA_PATENTE').where({ ID: ID }).del();
    this.patentes = await Knex('TABELA_PATENTE');
    return this.patentes;
  }
}

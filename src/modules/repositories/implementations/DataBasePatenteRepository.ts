import knex from 'knex';
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

  async updatePatente(): Promise<Patente[]> {
    //await Knex('TABELA_PATENTE').update({}).where({ ID: ID });

    //this.patentes = await Knex('TABELA_PATENTE');
    return this.patentes;
  }

  async deletePatente(ID: string): Promise<Patente[]> {
    await Knex('TABELA_PATENTE').where({ ID: ID }).del();
    this.patentes = await Knex('TABELA_PATENTE');
    return this.patentes;
  }
}

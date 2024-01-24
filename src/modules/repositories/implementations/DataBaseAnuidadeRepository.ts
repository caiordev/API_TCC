import knex from 'knex';
import { Knex } from '../../../shared/database/knex';

import { Anuidade } from '../../entities/Anuidade';

import { IAnuidadeRepository } from '../IAnuidadeRepository';

export class DataBaseAnuidadeRepository implements IAnuidadeRepository {
  public anuidades: Anuidade[];

  async save(anuidade: Anuidade): Promise<void> {
    try {
      await Knex('tabela_anuidade').insert(anuidade);
      console.log('create anuidade');
    } catch (error) {
      console.error('Error while saving anuidade:', error);
    }
  }

  async getAnuidade(): Promise<Anuidade[]> {
    this.anuidades = await Knex('tabela_anuidade');
    return this.anuidades;
  }

  async findById(id: string): Promise<Anuidade> {
    const anuidades = await Knex('tabela_anuidade');
    const anuidade = anuidades.find(e => {
      e.ID === id;
    });
    return anuidade;
  }

  async updateAnuidade(
    ID: string,
    DATAORD1: Date,
    DATAORD2: Date,
    CODIGOORD: number,
    VALORORD: number,
    DATAPAGAMENTOORD: Date,
    PROCESSOSEI: number,
    STATUS: string,
  ): Promise<Anuidade[]> {
    await Knex('tabela_anuidade')
      .update({
        ID: ID,
        DATAORD1: DATAORD1,
        DATAORD2: DATAORD2,
        CODIGOORD: CODIGOORD,
        VALORORD: VALORORD,
        DATAPAGAMENTOORD: DATAPAGAMENTOORD,
        PROCESSOSEI: PROCESSOSEI,
        STATUS: STATUS,
      })
      .where({ ID: ID });

    this.anuidades = await Knex('tabela_anuidade');
    return this.anuidades;
  }

  async deleteAnuidade(ID: string): Promise<Anuidade[]> {
    try {
      await Knex('tabela_anuidade').where({ ID: ID }).del();
    } catch (error) {
      console.log('erro:', error);
      throw error;
    }
    this.anuidades = await Knex('tabela_anuidade');
    return this.anuidades;
  }
}

import knex from 'knex';
import { Knex } from '../../../shared/database/knex';

import { Anuidade } from '../../entities/Anuidade';

import { IAnuidadeRepository } from '../IAnuidadeRepository';

export class DataBaseAnuidadeRepository implements IAnuidadeRepository {
  public anuidades: Anuidade[];

  async save(anuidade: Anuidade): Promise<void> {
    try {
      await Knex('TABELA_ANUIDADE').insert(anuidade);
    } catch (error) {
      console.error('Error while saving patente:', error);
    }
  }

  async getAnuidade(): Promise<Anuidade[]> {
    this.anuidades = await Knex('TABELA_ANUIDADE');
    return this.anuidades;
  }

  async findById(id: string): Promise<Anuidade> {
    const anuidades = await Knex('TABELA_ANUIDADE');
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
  ): Promise<Anuidade[]> {
    await Knex('TABELA_ANUIDADE')
      .update({
        ID: ID,
        DATAORD1: DATAORD1,
        DATAORD2: DATAORD2,
        CODIGOORD: CODIGOORD,
        VALORORD: VALORORD,
        DATAPAGAMENTOORD: DATAPAGAMENTOORD,
        PROCESSOSEI: PROCESSOSEI,
      })
      .where({ ID: ID });

    this.anuidades = await Knex('TABELA_ANUIDADE');
    return this.anuidades;
  }

  async deleteAnuidade(ID: string): Promise<Anuidade[]> {
    try {
      await Knex('TABELA_ANUIDADE').where({ ID: ID }).del();
    } catch (error) {
      console.log('erro:', error);
      throw error;
    }
    this.anuidades = await Knex('TABELA_ANUIDADE');
    return this.anuidades;
  }
}

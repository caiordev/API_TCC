import { Knex } from '../../../shared/database/knex';

import { Anuidade } from '../../entities/Anuidade';

import { IAnuidadeRepository } from '../IAnuidadeRepository';

export class DataBaseAnuidadeRepository implements IAnuidadeRepository {
  public anuidades: Anuidade[];

  async save(anuidade: Anuidade): Promise<void> {
    await Knex('TABELA_ANUIDADE').insert(anuidade);
  }

  async findById(id: string): Promise<Anuidade> {
    const anuidades = await Knex('TABELA_ANUIDADE');
    const anuidade = anuidades.find(e => {
      e.ID === id;
    });
    return anuidade;
  }
}

import { Knex } from '../../../shared/database/knex';
import { Exame } from '../../entities/Exame';
import { IExameRepository } from '../IExameRepository';

export class DataBaseExameRepository implements IExameRepository {
  public exames: Exame[];

  async getExame(): Promise<Exame[]> {
    this.exames = await Knex('TABELA_EXAME');
    return this.exames;
  }

  async findById(id: string): Promise<Exame> {
    const exames = await Knex('TABELA_EXAME');
    const exame = exames.find(e => e.ID === id);
    return exame;
  }

  async save(exame: Exame): Promise<void> {
    await Knex('TABELA_EXAME').insert(exame);
  }
}

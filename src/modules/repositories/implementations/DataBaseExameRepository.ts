import { Knex } from '../../../shared/database/knex';
import { Exame } from '../../entities/Exame';
import { IExameRepository } from '../IExameRepository';

export class DataBaseExameRepository implements IExameRepository {
  public exames: Exame[];

  async getExame(): Promise<Exame[]> {
    this.exames = await Knex('tabela_exame');
    return this.exames;
  }

  async findById(id: string): Promise<Exame> {
    const exames = await Knex('tabela_exame');
    const exame = exames.find(e => e.ID === id);
    return exame;
  }

  async save(exame: Exame): Promise<void> {
    console.log('Salvando exame');
    try {
      await Knex('tabela_exame').insert(exame);
    } catch (error) {
      console.error('Error while saving exame:', error);
    }
  }

  async updateExame(
    ID: string,
    VALOR: number,
    SERVICO: string,
    PRAZO: Date,
    PAGAMENTO: Date,
    PROCESSOSEI: number,
    TIPO: string,
    STATUS: string,
  ): Promise<Exame[]> {
    await Knex('tabela_exame')
      .update({
        VALOR: VALOR,
        SERVICO: SERVICO,
        PRAZO: PRAZO,
        PAGAMENTO: PAGAMENTO,
        PROCESSOSEI: PROCESSOSEI,
        TIPO: TIPO,
        STATUS: STATUS,
      })
      .where({ ID: ID });

    this.exames = await Knex('tabela_exame');
    return this.exames;
  }

  async deleteExame(ID: string): Promise<Exame[]> {
    await Knex('tabela_exame').delete().where({ ID: ID });

    this.exames = await Knex('tabela_exame');
    return this.exames;
  }
}

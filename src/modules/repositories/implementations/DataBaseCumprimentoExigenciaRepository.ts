import { Knex } from '../../../shared/database/knex';
import { CumprimentoExigencia } from '../../entities/CumprimentoExigencia';
import { ICumprimentoExigenciaRepository } from '../ICumprimentoExigenciaRepository';

export class DataBaseCumprimentoExigenciaRepository
  implements ICumprimentoExigenciaRepository
{
  public cumprimentoexigencias: CumprimentoExigencia[];

  async save(cumprimentoexigencia: CumprimentoExigencia): Promise<void> {
    try {
      await Knex('tabela_cumprimento_exigencia').insert(cumprimentoexigencia);
    } catch (error) {
      console.error('Error while saving patente:', error);
    }
  }

  async getCumprimentoExigencia(): Promise<CumprimentoExigencia[]> {
    this.cumprimentoexigencias == (await Knex('tabela_cumprimento_exigencia'));
    return this.cumprimentoexigencias;
  }

  async findById(ID: string): Promise<CumprimentoExigencia> {
    const cumprimentos = await Knex('tabela_cumprimento_exigencia');
    const cumprimento = cumprimentos.find(e => e.ID === ID);
    return cumprimento;
  }

  async updateCumprimentoExigencia(
    ID: string,
    VALOR: number,
    SERVICO: string,
    PRAZO: Date,
    PAGAMENTO: Date,
    PROCESSOSEI: number,
    TIPO: string,
  ): Promise<CumprimentoExigencia[]> {
    await Knex('tabela_cumprimento_exigencia')
      .update({
        VALOR: VALOR,
        SERVICO: SERVICO,
        PRAZO: PRAZO,
        PAGAMENTO: PAGAMENTO,
        PROCESSOSEI: PROCESSOSEI,
        TIPO: TIPO,
      })
      .where({ ID: ID });

    this.cumprimentoexigencias = await Knex('tabela_cumprimento_exigencia');
    return this.cumprimentoexigencias;
  }

  async deleteCumprimentoExigencia(
    ID: string,
  ): Promise<CumprimentoExigencia[]> {
    await Knex('tabela_cumprimento_exigencia').delete().where({ ID: ID });

    this.cumprimentoexigencias = await Knex('tabela_cumprimento_exigencia');
    return this.cumprimentoexigencias;
  }
}

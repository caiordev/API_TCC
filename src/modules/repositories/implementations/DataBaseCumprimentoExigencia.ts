import { Knex } from '../../../shared/database/knex';
import { CumprimentoExigencia } from '../../entities/CumprimentoExigencia';
import { ICumprimentoExigenciaRepository } from '../ICumprimentoExigenciaRepository';

export class DataBaseCumprimentoExigencia
  implements ICumprimentoExigenciaRepository
{
  public cumprimentoexigencias: CumprimentoExigencia[];

  async save(cumprimentoexigencia: CumprimentoExigencia): Promise<void> {
    try {
      await Knex('TABELA_CUMPRIMENTOEXIGENCIA').insert(cumprimentoexigencia);
    } catch (error) {
      console.error('Error while saving patente:', error);
    }
  }

  async getCumprimentoExigencia(): Promise<CumprimentoExigencia[]> {
    this.cumprimentoexigencias == (await Knex('TABELA_CUMPRIMENTOEXIGENCIA'));
    return this.cumprimentoexigencias;
  }

  async findById(ID: string): Promise<CumprimentoExigencia> {
    const cumprimentos = await Knex('TABELA_CUMPRIMENTOEXIGENCIA');
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
    await Knex('TABELA_CUMPRIMENTOEXIGENCIA')
      .update({
        VALOR: VALOR,
        SERVICO: SERVICO,
        PRAZO: PRAZO,
        PAGAMENTO: PAGAMENTO,
        PROCESSOSEI: PROCESSOSEI,
        TIPO: TIPO,
      })
      .where({ ID: ID });

    this.cumprimentoexigencias = await Knex('TABELA_CUMPRIMENTOEXIGENCIA');
    return this.cumprimentoexigencias;
  }

  async deleteCumprimentoExigencia(
    ID: string,
  ): Promise<CumprimentoExigencia[]> {
    await Knex('TABELA_CUMPRIMENTOEXIGENCIA').delete().where({ ID: ID });

    this.cumprimentoexigencias = await Knex('TABELA_CUMPRIMENTOEXIGENCIA');
    return this.cumprimentoexigencias;
  }
}

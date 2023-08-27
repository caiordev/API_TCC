import { Knex } from '../../../shared/database/knex';
import { Patente } from '../../entities/Patente';

export class DataBaseConsultasRepository {
  async getTest<T>(TITULO: string): Promise<T[]> {
    const all = await Knex('TABELA_PATENTE')
      .select('*')
      .whereLike('TABELA_PATENTE.TITULO', `%${TITULO}%`)
      .innerJoin(
        'TABELA_ANUIDADE',
        'TABELA_ANUIDADE.ID_PATENTE',
        'TABELA_PATENTE.ID',
      );
    return all;
  }

  //método que recebe o status da patente o titulo e os outros parametros

  async getPatente(
    STATUS: string,
    TITULO: string,
    OUTROS: 'PROTOCOLO' | 'NATUREZA' | 'DEPOSITO',
  ): Promise<Patente[]> {
    const patente = await Knex('TABELA_PATENTE')
      .select('*')
      .whereLike('TABELA_PATENTE.STATUS', `%${STATUS}%`)
      .andWhereLike(`${OUTROS}`, `%${OUTROS}%`);
    return patente;
  }
  //método que recebe o status da patente a data de pagamento e o tipo;
  //método que recebe o status da patente a data da exigencia e o tipo;
}

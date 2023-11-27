import { Knex } from '../../../shared/database/knex';
import { Anuidade } from '../../entities/Anuidade';
import { Patente } from '../../entities/Patente';

export class DataBaseConsultasRepository {
  async getPatente(
    STATUS: string,
    PROTOCOLO: string,
    DEPOSITO1: string,
    DEPOSITO2: string,
    TITULO: string,
  ): Promise<Patente[]> {
    let patente = Knex('TABELA_PATENTE').select('*');

    if (STATUS) {
      patente = patente.where('STATUS', 'like', `%${STATUS}%`);
    }

    if (PROTOCOLO) {
      patente = patente.andWhere('PROTOCOLO', 'like', `${PROTOCOLO}%`);
    }

    if (TITULO) {
      patente = patente.andWhere('TITULO', 'like', `%${TITULO}%`);
    }

    if (DEPOSITO1 && DEPOSITO2) {
      patente = patente.andWhereBetween('DEPOSITO', [
        new Date(DEPOSITO1).toISOString().substring(0, 10),
        new Date(DEPOSITO2).toISOString().substring(0, 10),
      ]);
    }

    const result = await patente;
    return result;
  }

  // async getPatenteTeste(
  //   STATUS: string,
  //   PROTOCOLO: number,
  //   DEPOSITO: string,
  //   TITULO: string,
  // ): Promise<Patente[]> {
  //   const patente = await Knex('TABELA_PATENTE')
  //     .select('*')
  //     .where(function() {
  //       this.where('TABELA_PATENTE.STATUS', 'like', `%${STATUS}%`)
  //         .andWhere(function() {
  //           this.where('TABELA_PATENTE.PROTOCOLO', 'like', `%${PROTOCOLO}%`)
  //             .orWhere('TABELA_PATENTE.TITULO', 'like', `%${TITULO}%`);
  //         });
  //     });

  //   return patente;
  // }

  async getAnuidade(
    STATUS: string,
    DATAINICIAL: string,
    DATAFINAL: string,
    PROTOCOLO: number,
  ): Promise<Anuidade[]> {
    const anuidade = await Knex('TABELA_ANUIDADE')
      .select('TABELA_PATENTE.PROTOCOLO', 'TABELA_ANUIDADE.*')
      .where((build: any) => {
        if (PROTOCOLO) {
          build
            //.where('STATUS', 'LIKE', `%${STATUS}%`)
            .andWhere('TABELA_PATENTE.PROTOCOLO', 'LIKE', `${PROTOCOLO}%`)
            .andWhereBetween('DATAPAGAMENTOORD', [
              new Date(DATAINICIAL).toISOString().substring(0, 10),
              new Date(DATAFINAL).toISOString().substring(0, 10),
            ]);
        } else {
          build
            //.where('TABELA_ANUIDADE.STATUS', 'LIKE', `%${STATUS}%`)
            .andWhereBetween('TABELA_ANUIDADE.DATAPAGAMENTOORD', [
              new Date(DATAINICIAL).toISOString().substring(0, 10),
              new Date(DATAFINAL).toISOString().substring(0, 10),
            ]);
        }
      })
      .innerJoin(
        'TABELA_PATENTE',
        'TABELA_PATENTE.ID',
        'TABELA_ANUIDADE.ID_PATENTE',
      );
    return anuidade;
  }

  async getExame(
    STATUS: string,
    DATAINICIAL: string,
    DATAFINAL: string,
    PROTOCOLO: number,
  ): Promise<Anuidade[]> {
    const anuidade = await Knex('TABELA_EXAME')
      .select('TABELA_PATENTE.PROTOCOLO', 'TABELA_EXAME.*')
      .where((build: any) => {
        if (PROTOCOLO) {
          build
            //.where('STATUS', 'LIKE', `%${STATUS}%`)
            .andWhere('TABELA_PATENTE.PROTOCOLO', 'LIKE', `${PROTOCOLO}%`)
            .andWhereBetween('PRAZO', [
              new Date(DATAINICIAL).toISOString().substring(0, 10),
              new Date(DATAFINAL).toISOString().substring(0, 10),
            ]);
        } else {
          build
            //.where('TABELA_ANUIDADE.STATUS', 'LIKE', `%${STATUS}%`)
            .andWhereBetween('TABELA_EXAME.PRAZO', [
              new Date(DATAINICIAL).toISOString().substring(0, 10),
              new Date(DATAFINAL).toISOString().substring(0, 10),
            ]);
        }
      })
      .innerJoin(
        'TABELA_PATENTE',
        'TABELA_PATENTE.ID',
        'TABELA_EXAME.ID_PATENTE',
      );
    return anuidade;
  }
  //método que recebe o status da patente a data de pagamento e o tipo;
  //método que recebe o status da patente a data da exigencia e o tipo;
}

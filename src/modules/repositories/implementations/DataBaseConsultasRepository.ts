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
    let patente = Knex('tabela_patente').select('*');

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
    const anuidade = await Knex('tabela_anuidade')
      .select('tabela_patente.PROTOCOLO', 'tabela_anuidade.*')
      .where((build: any) => {
        if (PROTOCOLO) {
          build
            //.where('STATUS', 'LIKE', `%${STATUS}%`)
            .andWhere('tabela_patente.PROTOCOLO', 'LIKE', `${PROTOCOLO}%`)
            .andWhereBetween('DATAPAGAMENTOORD', [
              new Date(DATAINICIAL).toISOString().substring(0, 10),
              new Date(DATAFINAL).toISOString().substring(0, 10),
            ]);
        } else {
          build
            //.where('TABELA_ANUIDADE.STATUS', 'LIKE', `%${STATUS}%`)
            .andWhereBetween('tabela_anuidade.DATAPAGAMENTOORD', [
              new Date(DATAINICIAL).toISOString().substring(0, 10),
              new Date(DATAFINAL).toISOString().substring(0, 10),
            ]);
        }
      })
      .innerJoin(
        'tabela_patente',
        'tabela_patente.ID',
        'tabela_anuidade.ID_PATENTE',
      );
    return anuidade;
  }

  async getExame(
    STATUS: string,
    DATAINICIAL: string,
    DATAFINAL: string,
    PROTOCOLO: number,
  ): Promise<Anuidade[]> {
    const anuidade = await Knex('tabela_exame')
      .select('tabela_patente.PROTOCOLO', 'tabela_exame.*')
      .where((build: any) => {
        if (PROTOCOLO) {
          build
            //.where('STATUS', 'LIKE', `%${STATUS}%`)
            .andWhere('tabela_patente.PROTOCOLO', 'LIKE', `${PROTOCOLO}%`)
            .andWhereBetween('PRAZO', [
              new Date(DATAINICIAL).toISOString().substring(0, 10),
              new Date(DATAFINAL).toISOString().substring(0, 10),
            ]);
        } else {
          build
            //.where('TABELA_ANUIDADE.STATUS', 'LIKE', `%${STATUS}%`)
            .andWhereBetween('tabela_exame.PRAZO', [
              new Date(DATAINICIAL).toISOString().substring(0, 10),
              new Date(DATAFINAL).toISOString().substring(0, 10),
            ]);
        }
      })
      .innerJoin(
        'tabela_patente',
        'tabela_patente.ID',
        'tabela_exame.ID_PATENTE',
      );
    return anuidade;
  }
  //método que recebe o status da patente a data de pagamento e o tipo;
  //método que recebe o status da patente a data da exigencia e o tipo;
}

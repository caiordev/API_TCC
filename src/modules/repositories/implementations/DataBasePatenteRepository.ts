import { Knex } from '../../../shared/database/knex';
import { Patente } from '../../entities/Patente';
import { IPatenteRepository } from '../IPatenteRepository';

export class DataBasePatenteRepository implements IPatenteRepository {
  public patentes: Patente[];

  async getPatente(): Promise<Patente[]> {
    this.patentes = await Knex('tabela_patente');
    return this.patentes;
  }

  async findById(id: string): Promise<Patente> {
    const patentes = await Knex('tabela_patente');
    const patente = patentes.find(e => {
      return e.ID === id;
    });
    return patente;
  }

  async findByProtocolo(PROTOCOLO: string): Promise<Patente> {
    const testes = await Knex('tabela_patente');
    const teste = testes.find(e => {
      return e.PROTOCOLO === PROTOCOLO;
    });
    return teste;
  }

  async save(patente: Patente): Promise<void> {
    console.log('salvando patente');
    try {
      await Knex('tabela_patente').insert(patente);
    } catch (error) {
      console.error('Error while saving patente:', error);
    }
  }

  async updatePatente(
    ID: string,
    PROTOCOLO: string,
    NATUREZA: string,
    DEPOSITO: Date,
    TITULO: string,
    INVENTORES: string,
    IPC: string,
    CPC: string,
    COTITULAR: string,
    QREIVIND: number,
    STATUS: string,
    PROCESSO: string,
    CONCESSAO: Date,
  ): Promise<Patente[]> {
    await Knex('tabela_patente')
      .update({
        PROTOCOLO: PROTOCOLO,
        NATUREZA: NATUREZA,
        DEPOSITO: DEPOSITO,
        TITULO: TITULO,
        INVENTORES: INVENTORES,
        IPC: IPC,
        CPC: CPC,
        COTITULAR: COTITULAR,
        QREIVIND: QREIVIND,
        STATUS: STATUS,
        PROCESSO: PROCESSO,
        CONCESSAO: CONCESSAO,
      })
      .where({ ID: ID });

    this.patentes = await Knex('tabela_patente');
    return this.patentes;
  }

  async deletePatente(ID: string): Promise<Patente[]> {
    await Knex('tabela_patente').where({ ID: ID }).del();
    this.patentes = await Knex('tabela_patente');
    return this.patentes;
  }
}

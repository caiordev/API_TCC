import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('TABELA_PATENTE').del();

  await knex('TABELA_PATENTE').insert([
    {
      ID: '1',
      PROTOCOLO: 123456,
      NATUREZA: 'Invenção',
      DEPOSITO: '2022-01-01',
      TITULO: 'Um novo produto',
      INVENTORES: 'João Silva, Maria Souza',
      IPC: 'C07C 51/265',
      CPC: 'C07C 51/265',
      COTITULAR: 'Empresa X',
      QREIVIND: 2,
      STATUS: 'Em análise',
      PROCESSO: '123.456.789/2022',
      CONCESSAO: '2022-05-01',
    },
    {
      ID: '2',
      PROTOCOLO: 789012,
      NATUREZA: 'Modelo de Utilidade',
      DEPOSITO: '2022-02-01',
      TITULO: 'Uma nova máquina',
      INVENTORES: 'Pedro Santos',
      IPC: 'B23Q 11/00',
      CPC: 'B23Q 11/00',
      COTITULAR: 'Empresa Y',
      QREIVIND: 1,
      STATUS: 'Concedida',
      PROCESSO: '456.789.012/2022',
      CONCESSAO: '2022-05-01',
    },
  ]);
}

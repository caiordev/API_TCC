import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('TABELA_PATENTE').del();

  await knex('TABELA_PATENTE').insert([
    {
      ID: '1',
      PROTOCOLO: 123456,
      NATUREZA: 'Invenção',
      DEPOSITO: new Date('2023/04/01').toISOString().substring(0, 10),
      TITULO: 'software',
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
      DEPOSITO: new Date('2022-02-01').toISOString().substring(0, 10),
      TITULO: 'patente',
      INVENTORES: 'Pedro Santos',
      IPC: 'B23Q 11/00',
      CPC: 'B23Q 11/00',
      COTITULAR: 'Empresa Y',
      QREIVIND: 1,
      STATUS: 'Anulado',
      PROCESSO: '456.789.012/2022',
      CONCESSAO: '2022-05-01',
    },
    {
      ID: '3',
      PROTOCOLO: 789332,
      NATUREZA: 'Software',
      DEPOSITO: new Date('2023-03-01').toISOString().substring(0, 10),
      TITULO: 'livro',
      INVENTORES: 'Caio',
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

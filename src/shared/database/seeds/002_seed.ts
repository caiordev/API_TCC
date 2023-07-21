import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('TABELA_PEDIDO').del();

  await knex('TABELA_PEDIDO').insert([
    {
      ID: '1',
      ID_PATENTE: '1',
      VALOR: 1000,
      CODIGO: 123456,
      DATAPAG: '2022-01-15',
      PROCESSOSEI: 789012,
    },
    {
      ID: '2',
      ID_PATENTE: '2',
      VALOR: 2000,
      CODIGO: 789012,
      DATAPAG: '2022-02-15',
      PROCESSOSEI: 345678,
    },
    {
      ID: '3',
      ID_PATENTE: '1',
      VALOR: 1500,
      CODIGO: 234567,
      DATAPAG: '2022-03-15',
      PROCESSOSEI: 901234,
    },
  ]);
}

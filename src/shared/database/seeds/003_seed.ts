import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('TABELA_ANUIDADE').del();

  await knex('TABELA_ANUIDADE').insert([
    {
      ID: '1',
      ID_PATENTE: '1',
      DATAORD1: '2022-01-01',
      DATAORD2: '2023-01-01',
      CODIGOORD: 1234,
      VALORORD: 1000,
      DATAPAGAMENTOORD: '2022-01-15',
      PROCESSOSEI: 10000001,
    },
    {
      ID: '2',
      ID_PATENTE: '2',
      DATAORD1: '2022-01-01',
      DATAORD2: '2023-01-01',
      CODIGOORD: 5678,
      VALORORD: 2000,
      DATAPAGAMENTOORD: '2022-02-15',
      PROCESSOSEI: 1234567,
    },
    {
      ID: '3',
      ID_PATENTE: '1',
      DATAORD1: '2022-01-01',
      DATAORD2: '2023-01-01',
      CODIGOORD: 9012,
      VALORORD: 1500,
      DATAPAGAMENTOORD: '2022-03-15',
      PROCESSOSEI: 12023,
    },
  ]);
}

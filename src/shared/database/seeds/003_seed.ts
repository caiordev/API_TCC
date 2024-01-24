import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('TABELA_ANUIDADE').del();

  await knex('TABELA_ANUIDADE').insert([
    {
      ID: '1',
      ID_PATENTE: '1',
      DATAORD1: new Date('2023-05-01').toISOString().substring(0, 10),
      DATAORD2: new Date('2023-01-11').toISOString().substring(0, 10),
      CODIGOORD: 1234,
      VALORORD: 1000,
      DATAPAGAMENTOORD: new Date('2023-03-01').toISOString().substring(0, 10),
      PROCESSOSEI: 10000001,
      STATUS: 'pago',
    },
    {
      ID: '2',
      ID_PATENTE: '2',
      DATAORD1: new Date('2023-09-01').toISOString().substring(0, 10),
      DATAORD2: new Date('2023-10-01').toISOString().substring(0, 10),
      CODIGOORD: 5678,
      VALORORD: 2000,
      DATAPAGAMENTOORD: new Date('2023-04-01').toISOString().substring(0, 10),
      PROCESSOSEI: 1234567,
      STATUS: 'pago',
    },
    {
      ID: '3',
      ID_PATENTE: '1',
      DATAORD1: new Date('2023-07-01').toISOString().substring(0, 10),
      DATAORD2: new Date('2023-11-01').toISOString().substring(0, 10),
      CODIGOORD: 9012,
      VALORORD: 1500,
      DATAPAGAMENTOORD: new Date('2023-05-01').toISOString().substring(0, 10),
      PROCESSOSEI: 12023,
      STATUS: 'pago',
    },
  ]);
}

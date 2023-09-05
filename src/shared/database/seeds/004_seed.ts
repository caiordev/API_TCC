import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('TABELA_EXAME').del();

  await knex('TABELA_EXAME').insert([
    {
      ID: '123',
      ID_PATENTE: '1',
      VALOR: 100,
      SERVICO: 'Exame de sangue',
      PRAZO: new Date('2023-08-15').toISOString().substring(0, 10),
      PAGAMENTO: new Date('2023-08-01').toISOString().substring(0, 10),
      PROCESSOSEI: 789,
      TIPO: 'Laboratorial',
    },
    {
      ID: '1',
      ID_PATENTE: '2',
      VALOR: 75,
      SERVICO: 'Exame de urina',
      PRAZO: new Date('2023-09-01').toISOString().substring(0, 10),
      PAGAMENTO: new Date('2023-08-22').toISOString().substring(0, 10),
      PROCESSOSEI: 456,
      TIPO: 'Imagem',
    },
  ]);
}

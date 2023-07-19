import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('TABELA_PATENTE').del();

  await knex('TABELA_PATENTE').insert([
    {
      ID: '',
      NOME: '',
    },
  ]);
}

import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('TABELA_USER').del();

  await knex('TABELA_USER').insert([
    {
      ID: '',
      NOME: '',
    },
  ]);
}

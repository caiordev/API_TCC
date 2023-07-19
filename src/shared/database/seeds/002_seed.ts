import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('TABELA_PAGAMENTO').del();

  await knex('TABELA_PAGAMENTO').insert([
    {
      ID: '',
      NOME: '',
    },
  ]);
}

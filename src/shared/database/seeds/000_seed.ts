import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('TABELA_USER').del();

  await knex('TABELA_USER').insert([
    {
      ID: '1',
      NOME: 'João',
      EMAIl: 'joao@example.com',
      SENHA: '123456',
      TIPO: 1,
    },
    {
      ID: '2',
      NOME: 'Maria',
      EMAIl: 'maria@example.com',
      SENHA: '654321',
      TIPO: 2,
    },
    {
      ID: '3',
      NOME: 'Pedro',
      EMAIl: 'pedro@example.com',
      SENHA: 'abcdef',
      TIPO: 1,
    },
  ]);
}

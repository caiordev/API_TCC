import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('TABELA_USER').del();

  await knex('TABELA_USER').insert([
    {
      ID: '1',
      NOME: 'João',
      EMAIl: 'joao@example.com',
      SENHA: '123456',
      TIPO: 'Admnistrador',
    },
    {
      ID: '2',
      NOME: 'Maria',
      EMAIl: 'maria@example.com',
      SENHA: '654321',
      TIPO: 'Admnistrador',
    },
    {
      ID: '3',
      NOME: 'Pedro',
      EMAIl: 'pedro@example.com',
      SENHA: 'abcdef',
      TIPO: 'Admnistrador',
    },
  ]);
}

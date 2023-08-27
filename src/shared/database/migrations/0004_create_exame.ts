import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('TABELA_EXAME', table => {
      table.string('ID').primary().index();
      table
        .string('ID_PATENTE')
        .references('ID')
        .inTable('TABELA_PATENTE')
        .index()
        .onDelete('CASCADE')
        .unique();
      table.integer('VALOR').notNullable();
      table.string('SERVICO').notNullable();
      table.date('PRAZO').notNullable();
      table.date('PAGAMENTO').notNullable();
      table.integer('PROCESSOSEI').notNullable();
      table.string('TIPO').notNullable();
    })
    .then(() => {
      console.log('# Create table TABELA_EXAME');
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('TABELA_EXAME').then(() => {
    console.log('# Dropped table TABELA_EXAME');
  });
}

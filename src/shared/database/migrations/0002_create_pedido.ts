import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('TABELA_PEDIDO', table => {
    table.string('ID').primary().index();
    table
      .string('ID_PATENTE')
      .references('ID')
      .inTable('TABELA_PATENTE')
      .index()
      .onDelete('CASCADE');
    table.integer('VALOR').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('TABELA_PEDIDO').then(() => {
    console.log('# Dropped table TABELA_PEDIDO');
  });
}

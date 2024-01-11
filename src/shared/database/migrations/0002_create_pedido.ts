import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('tabela_pedido', table => {
    table.string('ID').primary().index();
    table
      .string('ID_PATENTE')
      .references('ID')
      .inTable('TABELA_PATENTE')
      .index()
      .onDelete('CASCADE')
      .unique();
    table.integer('VALOR').notNullable();
    table.integer('CODIGO').notNullable();
    table.date('DATAPAG').notNullable();
    table.integer('PROCESSOSEI').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('tabela_pedido').then(() => {
    console.log('# Dropped table TABELA_PEDIDO');
  });
}

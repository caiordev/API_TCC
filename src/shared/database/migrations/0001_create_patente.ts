import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('TABELA_PATENTE', table => {
      table.string('ID').primary().index();
      table.integer('PROTOCOLO').notNullable();
      table.string('NATUREZA').notNullable();
      table.date('DEPÓSITO').notNullable();
      table.string('TITULO').notNullable();
      table.string('INVENTORES').notNullable();
      table.string('IPC').nullable();
      table.string('CPC').nullable();
      table.string('COTITULAR').notNullable();
      table.integer('QREIVIND').notNullable();
      table.string('STATUS').notNullable();
      table.string('PROCESSO').notNullable();
      table.date('CONCESSÃO').nullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .then(() => {
      console.log('# Create table TABELA_PATENTE');
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('TABELA_PATENTE').then(() => {
    console.log('# Dropped table TABELA_PATENTE');
  });
}

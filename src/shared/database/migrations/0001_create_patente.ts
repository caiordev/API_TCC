import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('tabela_patente', table => {
      table.string('ID').primary().index();
      table.integer('PROTOCOLO').notNullable();
      table.string('NATUREZA').notNullable();
      table.date('DEPOSITO').notNullable();
      table.string('TITULO').notNullable();
      table.string('INVENTORES').notNullable();
      table.string('IPC').nullable();
      table.string('CPC').nullable();
      table.string('COTITULAR').notNullable();
      table.integer('QREIVIND').notNullable();
      table.string('STATUS').notNullable();
      table.string('PROCESSO').notNullable();
      table.date('CONCESSAO').nullable();
    })
    .then(() => {
      console.log('# Create table TABELA_PATENTE');
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('tabela_patente').then(() => {
    console.log('# Dropped table TABELA_PATENTE');
  });
}

import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('tabela_anuidade', table => {
    table.string('ID').primary().index();
    table
      .string('ID_PATENTE')
      .references('ID')
      .inTable('TABELA_PATENTE')
      .index()
      .onDelete('CASCADE');
    table.date('DATAORD1').notNullable();
    table.date('DATAORD2').notNullable();
    table.integer('CODIGOORD').notNullable();
    table.integer('VALORORD').notNullable();
    table.date('DATAPAGAMENTOORD').notNullable();
    table.integer('PROCESSOSEI').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('tabela_anuidade').then(() => {
    console.log('# Dropped table TABELA_ANUIDADE');
  });
}

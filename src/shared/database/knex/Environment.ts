import { Knex } from 'knex';
import path from 'path';

export const development: Knex.Config = {
  client: 'mysql',
  useNullAsDefault: true,
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'caiodev400',
    database: 'teste2',
  },

  migrations: {
    directory: path.resolve(__dirname, '..', 'migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, '..', 'seeds'),
  },
  pool: {
    // afterCreate: (connection: any, done: Function) => {
    //   connection.run('PRAGMA foreign_keys = ON');
    //   done(); }
    min: 0, // Define o número mínimo de conexões no pool como 0
  },
};

export const test: Knex.Config = {
  ...development,
  connection: ':memory:',
};

export const production: Knex.Config = {
  ...development,
};

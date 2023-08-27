import { Knex } from '../../../shared/database/knex';
import { User } from '../../entities/User';
import { IUserRepository } from '../IUserRepository';

export class DataBaseUserRepository implements IUserRepository {
  public users: User[];

  async getUser(): Promise<User[]> {
    this.users = await Knex('TABELA_USER');
    return this.users;
  }

  async save(user: User): Promise<void> {
    try {
      await Knex('TABELA_USER').insert(user);
    } catch (error) {
      console.error('aconteceu esse erro aqui: ' + error);
    }
  }

  async findByUser(email: string): Promise<User> {
    const users = await Knex('TABELA_USER');
    const user = users.find(e => e.EMAIL === email);
    return user;
  }

  async updateUser(
    ID: string,
    NOME: string,
    EMAIL: string,
    SENHA: string,
    TIPO: number,
  ): Promise<User[]> {
    await Knex('TABELA_USER')
      .update({
        NOME: NOME,
        EMAIL: EMAIL,
        SENHA: SENHA,
        TIPO: TIPO,
      })
      .where({ ID: ID });

    this.users = await Knex('TABELA_USER');
    return this.users;
  }

  async deleteUser(ID: string): Promise<User[]> {
    await Knex('TABELA_USER').delete().where({ ID: ID });

    this.users = await Knex('TABELA_USER');
    return this.users;
  }
}

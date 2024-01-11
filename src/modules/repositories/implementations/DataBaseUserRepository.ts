import { Knex } from '../../../shared/database/knex';
import { User } from '../../entities/User';
import { IUserRepository } from '../IUserRepository';

export class DataBaseUserRepository implements IUserRepository {
  public users: User[];

  async save(user: User): Promise<void> {
    try {
      await Knex('tabela_user').insert(user);
    } catch (error) {
      console.error('aconteceu esse erro aqui: ' + error);
    }
  }

  async findByUser(email: string): Promise<User> {
    const users = await Knex('tabela_user');
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
    await Knex('tabela_user')
      .update({
        NOME: NOME,
        EMAIL: EMAIL,
        SENHA: SENHA,
        TIPO: TIPO,
      })
      .where({ ID: ID });

    this.users = await Knex('tabela_user');
    return this.users;
  }

  async deleteUser(ID: string): Promise<User[]> {
    await Knex('tabela_user').delete().where({ ID: ID });

    this.users = await Knex('tabela_user');
    return this.users;
  }
}

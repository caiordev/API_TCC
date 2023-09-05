import { User } from '../entities/User';

export interface IUserRepository {
  save(user: User): Promise<void>;
  findByUser(ID: string): Promise<User>;
  updateUser(
    ID: string,
    NOME: string,
    EMAIL: string,
    SENHA: string,
    TIPO: number,
  ): Promise<User[]>;
  deleteUser(ID: string): Promise<User[]>;
}

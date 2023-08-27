import { User } from '../entities/User';

export interface IUserRepository {
  getUser(): Promise<User[]>;
  save(user: User): Promise<void>;
  findByUser(email: string): Promise<User>;
  updateUser(
    ID: string,
    NOME: string,
    EMAIL: string,
    SENHA: string,
    TIPO: number,
  ): Promise<User[]>;
  deleteUser(ID: string): Promise<User[]>;
}

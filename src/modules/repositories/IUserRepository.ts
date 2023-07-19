import { User } from '../entities/User';

export interface IUserRepository {
  getUser(): Promise<User[]>;
  findByUser(email: string): Promise<User>;
}

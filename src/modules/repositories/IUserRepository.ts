import { User } from '../entities/User';

export interface IUserRepository {
  getUser(): Promise<User[]>;
  save(user: User): Promise<void>;
  findByUser(email: string): Promise<User>;
}

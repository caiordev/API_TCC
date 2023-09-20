import { DataBaseUserRepository } from '../../../repositories/implementations/DataBaseUserRepository';
import { IUserRepository } from '../../../repositories/IUserRepository';

interface IUserRequest {
  ID: string;
}
export class DeleteUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ ID }: IUserRequest) {
    const userDeletado = await this.userRepository.deleteUser(ID);
    return userDeletado;
  }
}

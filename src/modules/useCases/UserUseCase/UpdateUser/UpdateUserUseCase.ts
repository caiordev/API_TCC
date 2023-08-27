import { hash } from 'bcryptjs';
import { IUserRepository } from '../../../repositories/IUserRepository';

interface IUserRequest {
  ID: string;
  NOME: string;
  EMAIL: string;
  SENHA: string;
  TIPO: number;
}

export class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ ID, NOME, EMAIL, SENHA, TIPO }: IUserRequest) {
    const passwordHash = await hash(SENHA.toString(), 8);

    const updateUser = this.userRepository.updateUser(
      ID,
      NOME,
      EMAIL,
      passwordHash,
      TIPO,
    );
    return updateUser;
  }
}

import { hash } from 'bcryptjs';
import { User } from '../../../entities/User';
import { IUserRepository } from '../../../repositories/IUserRepository';

interface IUserRequest {
  ID?: string;
  NOME: string;
  EMAIL: string;
  SENHA: string;
  TIPO: number;
}

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ ID, NOME, EMAIL, SENHA, TIPO }: IUserRequest) {
    const userAlreadyExists = await this.userRepository.findByUser(ID);
    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const passwordHash = await hash(SENHA.toString(), 8);

    const user = new User({
      NOME,
      EMAIL,
      SENHA: passwordHash,
      TIPO,
    });

    await this.userRepository.save(user);

    return user;
  }
}

export { CreateUserUseCase };

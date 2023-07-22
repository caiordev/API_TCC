import { sign } from 'jsonwebtoken';
import { IUserRepository } from '../../../repositories/IUserRepository';
import { compare } from 'bcryptjs';

interface IRequest {
  EMAIL: string;
  SENHA: string;
}

export class AuthenticateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ EMAIL, SENHA }: IRequest) {
    const userAlreadyExists = await this.userRepository.findByUser(EMAIL);

    if (!userAlreadyExists) {
      throw new Error('User or password incorrect!');
    }

    const passwordMatch = await compare(SENHA, userAlreadyExists.SENHA);

    if (!passwordMatch) {
      throw new Error('User or password incorrect!');
    }

    const token = sign({}, 'c957b733-7a23-41d5-96b7-fa8374f8e582', {
      subject: userAlreadyExists.ID.toString(),
      expiresIn: '30d',
    });

    return { token, user: userAlreadyExists };
  }
}

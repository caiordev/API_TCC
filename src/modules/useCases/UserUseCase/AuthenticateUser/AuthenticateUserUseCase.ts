// Importação da função "sign" da biblioteca "jsonwebtoken"
// A função "sign" é usada para criar tokens JWT
import { sign } from 'jsonwebtoken';
// Importação da interface "IUserRepository" do repositório de usuários
import { IUserRepository } from '../../../repositories/IUserRepository';
// Importação da função "compare" da biblioteca "bcryptjs"
// A função "compare" é usada para comparar senhas com hash
import { compare } from 'bcryptjs';

interface IRequest {
  EMAIL: string;
  SENHA: string;
}

export class AuthenticateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ EMAIL, SENHA }: IRequest) {
    // Verificar se o USUARIO existe
    const userAlreadyExists = await this.userRepository.findByUser(EMAIL);

    if (!userAlreadyExists) {
      throw new Error('User or password incorrect!');
    }

    // Verificar se a SENHA está correta
    const passwordMatch = await compare(SENHA, userAlreadyExists.SENHA);

    if (!passwordMatch) {
      throw new Error('User or password incorrect!');
    }

    // Gerar o token do usuário
    const token = sign({}, 'c957b733-7a23-41d5-96b7-fa8374f8e582', {
      subject: userAlreadyExists.ID.toString(),
      // expiresIn: "30d"
    });

    // Retorna o token de autenticação e as informações do usuário
    return { token, user: userAlreadyExists };
  }
}

import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';
import { Response, Request } from 'express';

export class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}

  async handle(request: Request, response: Response) {
    // Extrai o nome de usuário e senha do corpo da requisição
    const { EMAIL, SENHA } = request.body;

    // Imprime os valores do nome de usuário e senha no console
    console.log('USUARIO', EMAIL);
    console.log('SENHA', SENHA);

    try {
      // Chama o caso de uso authenticateUserUseCase para executar a autenticação
      const token = await this.authenticateUserUseCase.execute({
        EMAIL,
        SENHA,
      });

      // Retorna o token de autenticação no corpo da resposta com o status 201 (Created)
      return response.status(201).json(token);
    } catch (error) {
      // Se ocorrer um erro com a mensagem "User or password incorrect!", retorna um JSON com a mensagem de erro e o status 409 (Conflict)
      if (error.message === 'User or password incorrect!') {
        return response.status(409).json({
          message: 'User or password incorrect!',
        });
      }

      // Se ocorrer qualquer outro erro, retorna um JSON com a mensagem de erro "Internal server error" e o status 500 (Internal Server Error)
      return response.status(500).json({
        message: 'Internal server error',
      });
    }
  }
}

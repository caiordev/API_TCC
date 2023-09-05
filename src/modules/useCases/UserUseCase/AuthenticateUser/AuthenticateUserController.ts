import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';
import { Response, Request } from 'express';

export class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}

  async handle(request: Request, response: Response) {
    const { EMAIL, SENHA } = request.body;

    console.log('USUARIO', EMAIL);
    console.log('SENHA', SENHA);

    try {
      const token = await this.authenticateUserUseCase.execute({
        EMAIL,
        SENHA,
      });

      return response.status(201).json(token);
    } catch (error) {
      if (error.message === 'User or password incorrect!') {
        return response.status(409).json({
          message: 'User or password incorrect!',
        });
      }

      return response.status(500).json({
        message: 'Internal server error',
      });
    }
  }
}

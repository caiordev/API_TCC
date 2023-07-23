import { Request, Response } from 'express';
import { CreateUserUseCase } from './PostUserUseCase';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response) {
    const { NOME, EMAIL, SENHA, TIPO } = request.body;

    try {
      const registeredUser = await this.createUserUseCase.execute({
        NOME,
        EMAIL,
        SENHA,
        TIPO,
      });

      return response.status(201).json(registeredUser);
    } catch (error) {
      if (error.message === 'User already exists!') {
        return response.status(409).json({
          message: 'User already exists!',
        });
      }
      return response.status(500).json({
        message: 'Internal server error',
      });
    }
  }
}

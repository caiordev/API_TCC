import { RequestBatchOptions } from '@prisma/client/runtime/library';
import { Request, Response } from 'express';
import { UpdateUserUseCase } from './UpdateUserUseCase';

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { ID } = request.params;
    const { NOME, EMAIL, SENHA, TIPO } = request.body;

    try {
      const user = await this.updateUserUseCase.execute({
        ID,
        NOME,
        EMAIL,
        SENHA,
        TIPO,
      });
      return response.status(201).json(user);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}

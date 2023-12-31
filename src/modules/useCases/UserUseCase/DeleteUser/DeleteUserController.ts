import { Request, Response } from 'express';
import { DeleteUserUseCase } from './DeleteUserUseCase';

export class DeleteUserController {
  constructor(private userUseCase: DeleteUserUseCase) {}

  async handler(request: Request, response: Response): Promise<Response> {
    const { ID } = request.params;
    try {
      const user = this.userUseCase.execute({ ID });

      response.status(201).json(user);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error',
      });
    }
  }
}

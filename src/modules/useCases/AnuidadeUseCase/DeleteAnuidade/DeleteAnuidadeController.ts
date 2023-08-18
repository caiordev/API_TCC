import { DeleteAnuidadeUseCase } from './DeleteAnuidadeUseCase';
import { Request, Response } from 'express';

export class DeleteAnuidadeController {
  constructor(private deleteAnuidadeUseCase: DeleteAnuidadeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { ID } = request.params;

    try {
      const anuidades = await this.deleteAnuidadeUseCase.execute({
        ID,
      });
      return response.status(201).json(anuidades);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error',
      });
    }
  }
}

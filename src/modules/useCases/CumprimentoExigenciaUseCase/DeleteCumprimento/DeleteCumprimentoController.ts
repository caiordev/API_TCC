import { Request, Response } from 'express';
import { DeleteCumprimentoUseCase } from './DeleteCumprimentoUseCase';

export class DeleteCumprimentoController {
  constructor(private deleteCumprimentoUseCase: DeleteCumprimentoUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { ID } = request.params;

    try {
      const cumprimento = await this.deleteCumprimentoUseCase.execute({ ID });

      return response.status(201).json(cumprimento);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error',
      });
    }
  }
}

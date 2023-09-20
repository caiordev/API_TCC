import { Request, Response } from 'express';
import { DeletePatenteUseCase } from './DeletePatenteUseCase';

export class DeletePatenteController {
  constructor(private deletePatenteUseCase: DeletePatenteUseCase) {}

  async handler(request: Request, response: Response): Promise<Response> {
    const { ID } = request.params;
    try {
      const patente = await this.deletePatenteUseCase.execute({ ID });

      return response.status(201).json(patente);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error',
      });
    }
  }
}

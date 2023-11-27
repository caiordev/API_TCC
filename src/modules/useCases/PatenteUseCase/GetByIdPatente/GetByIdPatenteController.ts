import { Request, Response } from 'express';
import { GetByIdPatenteUseCase } from './GetByIdPatenteUseCase';

export class GetByIdPatenteController {
  constructor(private getPatenteUseCase: GetByIdPatenteUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { ID } = request.params;

    try {
      const patente = await this.getPatenteUseCase.execute({ ID });

      return response.status(201).json(patente);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}

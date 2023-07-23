import { Request, Response } from 'express';
import { GetPatenteUseCase } from './GetPatenteUseCase';

export class GetPatenteController {
  constructor(private getPatenteUseCase: GetPatenteUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const patente = await this.getPatenteUseCase.execute();

      return response.status(201).json(patente);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}

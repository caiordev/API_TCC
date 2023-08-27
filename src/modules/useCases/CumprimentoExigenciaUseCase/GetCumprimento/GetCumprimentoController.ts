import { GetCumprimentoUseCase } from './GetCumprimentoUseCase';
import { Request, Response } from 'express';
export class GetCumprimentoController {
  constructor(private getCumprimentoUseCase: GetCumprimentoUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const cumprimento = await this.getCumprimentoUseCase.execute();

      return response.status(201).json(cumprimento);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}

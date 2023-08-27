import { Request, Response } from 'express';
import { TesteUseCase } from './TesteUseCase';

export class TesteController {
  constructor(private testUseCase: TesteUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { TITULO } = request.query;

    if (typeof TITULO !== 'string') {
      // Trate o caso em que TITULO não é uma string
      return response.status(400).json({
        message: 'TITULO deve ser uma string.',
      });
    }

    try {
      const consulta = await this.testUseCase.execute({ TITULO });

      response.status(201).json(consulta);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}

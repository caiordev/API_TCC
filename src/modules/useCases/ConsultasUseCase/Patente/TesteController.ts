import { Request, Response } from 'express';
import { TesteUseCase } from './TesteUseCase';

export class TesteController {
  constructor(private testUseCase: TesteUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { TITULO, STATUS, PROTOCOLO, DEPOSITO1, DEPOSITO2 } =
      request.query as {
        TITULO?: string;
        STATUS?: string;
        PROTOCOLO?: number;
        DEPOSITO1?: string;
        DEPOSITO2?: string;
      };

    try {
      const consulta = await this.testUseCase.execute({
        STATUS,
        PROTOCOLO,
        DEPOSITO1,
        DEPOSITO2,
        TITULO,
      });

      response.status(201).json(consulta);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}

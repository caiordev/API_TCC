import { Request, Response } from 'express';
import { AnuidadeConsultaUseCase } from './AnuidadeConsultaUseCase';

export class AnuidadeConsultaController {
  constructor(private testUseCase: AnuidadeConsultaUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { STATUS, DATAINICIAL, DATAFINAL, PROTOCOLO } = request.query as {
      STATUS?: string;
      DATAINICIAL?: string;
      DATAFINAL?: string;
      PROTOCOLO?: number;
    };
    console.log(PROTOCOLO);

    try {
      const consulta = await this.testUseCase.execute({
        STATUS,
        DATAINICIAL,
        DATAFINAL,
        PROTOCOLO,
      });

      response.status(201).json(consulta);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}

import { Request, Response } from 'express';
import { CreateExameUseCase } from './PostExameUseCase';

export class CreateExameController {
  constructor(private createExameUseCase: CreateExameUseCase) {}

  async handle(request: Request, response: Response) {
    const { ID_PATENTE, VALOR, SERVICO, PRAZO, PAGAMENTO, PROCESSOSEI, TIPO } =
      request.body;

    try {
      const registeredExame = await this.createExameUseCase.execute({
        ID_PATENTE,
        VALOR,
        SERVICO,
        PRAZO,
        PAGAMENTO,
        PROCESSOSEI,
        TIPO,
      });

      return response.status(201).json(registeredExame);
    } catch (error) {
      if (error.message === 'User already exists!') {
        return response.status(409).json({
          message: 'User already exists!',
        });
      }

      return response.status(500).json({
        message: 'Internal server error',
      });
    }
  }
}

import { Request, Response } from 'express';
import { CreatePagamentoUseCase } from './PostPagamentoUseCase';

export class CreatePagamentoController {
  constructor(private createPagamentoUseCase: CreatePagamentoUseCase) {}

  async handle(request: Request, response: Response) {
    const { VALOR } = request.body;

    try {
      const registeredPagamento = await this.createPagamentoUseCase.execute({
        VALOR,
      });
      return response.status(201).json(registeredPagamento);
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

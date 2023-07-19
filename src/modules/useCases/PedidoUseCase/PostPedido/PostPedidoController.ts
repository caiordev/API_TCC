import { Request, Response } from 'express';
import { CreatePedidoUseCase } from './PostPedidoUseCase';

export class CreatePedidoController {
  constructor(private createPedidoUseCase: CreatePedidoUseCase) {}

  async handle(request: Request, response: Response) {
    const { VALOR, ID } = request.body;

    try {
      const registeredPedido = await this.createPedidoUseCase.execute({
        ID,
        VALOR,
      });
      return response.status(201).json(registeredPedido);
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

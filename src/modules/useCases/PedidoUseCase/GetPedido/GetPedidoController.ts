import { Request, Response } from 'express';
import { GetPedidoUseCase } from './GetPedidoUseCase';

export class GetPedidoController {
  constructor(private getPedidoUseCase: GetPedidoUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const pedido = await this.getPedidoUseCase.execute();

      return response.status(201).json(pedido);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}

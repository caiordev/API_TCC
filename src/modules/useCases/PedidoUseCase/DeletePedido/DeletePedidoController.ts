import { Request, Response } from 'express';
import { DeletePedidoUseCase } from './DeletePedidoUseCase';

export class DeletePedidoController {
  constructor(private deletePedidoUseCase: DeletePedidoUseCase) {}

  async handler(request: Request, response: Response): Promise<Response> {
    const { ID } = request.params;
    try {
      const pedido = await this.deletePedidoUseCase.execute({ ID });

      return response.status(201).json(pedido);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error',
      });
    }
  }
}

import { Request, Response } from 'express';
import { GetByProtocoloPatenteUseCase } from './GetByProtocoloPatenteUseCase';

export class GetByProtocoloPatenteController {
  constructor(private getPatenteUseCase: GetByProtocoloPatenteUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { PROTOCOLO } = request.body;

    try {
      const patente = await this.getPatenteUseCase.execute({ PROTOCOLO });

      return response.status(201).json(patente);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}

import { Request, Response } from 'express';
import { ResolveRequestBody } from 'fastify/types/type-provider';
import { DeleteExameUseCase } from './DeleteExameUseCase';

export class DeleteExameController {
  constructor(private deleteExameUseCase: DeleteExameUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { ID } = request.params;
    try {
      const exame = await this.deleteExameUseCase.execute({ ID });

      return response.status(201).json(exame);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error',
      });
    }
  }
}

import { Request, Response } from 'express';
import { GetExameUseCase } from './GetExameUseCase';

export class GetExameController {
  constructor(private getExameUseCase: GetExameUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const exame = await this.getExameUseCase.execute();
      return response.status(201).json(exame);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}

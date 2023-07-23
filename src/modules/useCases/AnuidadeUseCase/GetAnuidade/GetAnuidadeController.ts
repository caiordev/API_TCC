import { Request, Response } from 'express';
import { GetAnuidadeUseCase } from './GetAnuidadeUseCase';

export class GetAnuidadeController {
  constructor(private getAnuidadeUseCase: GetAnuidadeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const anuidade = await this.getAnuidadeUseCase.execute();

      response.status(201).json(anuidade);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}

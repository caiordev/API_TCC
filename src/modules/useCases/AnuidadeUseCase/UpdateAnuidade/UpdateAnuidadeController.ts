import { Request, Response } from 'express';
import { UpdateAnuidadeUseCase } from './UpdateAnuidadeUseCase';

export class UpdateAnuidadeController {
  constructor(private updadeAnuidadeUseCase: UpdateAnuidadeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { ID } = request.params;
    const {
      DATAORD1,
      DATAORD2,
      CODIGOORD,
      VALORORD,
      DATAPAGAMENTOORD,
      PROCESSOSEI,
    } = request.body;

    try {
      const anuidade = await this.updadeAnuidadeUseCase.execute({
        ID,
        DATAORD1,
        DATAORD2,
        CODIGOORD,
        VALORORD,
        DATAPAGAMENTOORD,
        PROCESSOSEI,
      });
      return response.status(201).send(anuidade);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}

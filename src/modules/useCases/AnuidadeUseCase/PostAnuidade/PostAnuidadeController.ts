import { Request, Response } from 'express';
import { CreateAnuidadeUseCase } from './PostAnuidadeUseCase';

export class CreateAnuidadeController {
  constructor(private createAnuidadeUseCase: CreateAnuidadeUseCase) {}

  async handle(request: Request, response: Response) {
    const {
      ID_PATENTE,
      DATAORD1,
      DATAORD2,
      CODIGOORD,
      VALORORD,
      DATAPAGAMENTOORD,
      PROCESSOSEI,
    } = request.body;

    try {
      const registeredAnuidade = await this.createAnuidadeUseCase.execute({
        ID_PATENTE,
        DATAORD1,
        DATAORD2,
        CODIGOORD,
        VALORORD,
        DATAPAGAMENTOORD,
        PROCESSOSEI,
      });
      return response.status(201).json(registeredAnuidade);
    } catch (error) {
      if (error.message === 'User already exists') {
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

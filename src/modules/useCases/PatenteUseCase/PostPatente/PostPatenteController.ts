import { Request, Response } from 'express';
import { CreatePatenteUseCase } from './PostPatenteUseCase';

export class CreatePatenteController {
  constructor(private createPatenteUseCase: CreatePatenteUseCase) {}

  async handle(request: Request, response: Response) {
    const {
      ID,
      PROTOCOLO,
      NATUREZA,
      // DEPOSITO,
      //TITULO,
      //INVENTORES,
      //IPC,
      //CPC,
      //COTITULAR,
      //QREIVIND,
      //STATUS,
      //PROCESSO,
      //CONCESSAO,
    } = request.body;

    try {
      const registeredPatente = await this.createPatenteUseCase.execute({
        ID,
        PROTOCOLO,
        NATUREZA,
        //DEPOSITO,
        //TITULO,
        //INVENTORES,
        //IPC,
        //CPC,
        //COTITULAR,
        //QREIVIND,
        //STATUS,
        //PROCESSO,
        //CONCESSAO,
      });
      return response.status(201).json(registeredPatente);
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

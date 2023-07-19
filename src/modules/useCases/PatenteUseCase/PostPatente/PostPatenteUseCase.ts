import { Patente } from '../../../entities/Patente';
import { IPatenteRepository } from '../../../repositories/IPatenteRepository';
import { hash } from 'bcryptjs';
import AppError from '../../../../shared/http/errors/AppError';

interface IPatenteRequest {
  ID: string;
  PROTOCOLO: number;
  NATUREZA: string;
  //DEPOSITO?: Date;
  //TITULO: string;
  //INVENTORES: string;
  //IPC?: string;
  //CPC?: string;
  //COTITULAR: string;
  //QREIVIND: number;
  //STATUS: string;
  //PROCESSO: string;
  //CONCESSAO?: Date;
}

class CreatePatenteUseCase {
  constructor(private patenteRepository: IPatenteRepository) {}

  async execute({
    ID,
    PROTOCOLO,
    NATUREZA, //DEPOSITO,
    //TITULO,
  } //INVENTORES,
  //IPC,
  //CPC,
  //COTITULAR,
  //QREIVIND,
  //STATUS,
  //PROCESSO,
  //CONCESSAO,
  : IPatenteRequest) {
    const patenteAlreadyExists = await this.patenteRepository.findById(ID);

    if (patenteAlreadyExists) {
      throw new AppError('User already exists!');
    }

    const patente = new Patente({
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

    await this.patenteRepository.save(patente);

    return patente;
  }
}

export { CreatePatenteUseCase };

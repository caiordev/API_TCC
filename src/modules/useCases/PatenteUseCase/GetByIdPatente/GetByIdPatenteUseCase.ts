import { IPatenteRepository } from '../../../repositories/IPatenteRepository';

interface IPatenteRequest {
  ID: string;
}

export class GetByIdPatenteUseCase {
  constructor(private patenteRepository: IPatenteRepository) {}

  async execute({ ID }: IPatenteRequest) {
    const Patente = await this.patenteRepository.findById(ID);
    return Patente;
  }
}

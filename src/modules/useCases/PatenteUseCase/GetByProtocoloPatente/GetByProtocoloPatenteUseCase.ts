import { IPatenteRepository } from '../../../repositories/IPatenteRepository';

interface IPatenteRequest {
  PROTOCOLO: string;
}

export class GetByProtocoloPatenteUseCase {
  constructor(private patenteRepository: IPatenteRepository) {}

  async execute({ PROTOCOLO }: IPatenteRequest) {
    const Patente = await this.patenteRepository.findById(PROTOCOLO);
    return Patente;
  }
}

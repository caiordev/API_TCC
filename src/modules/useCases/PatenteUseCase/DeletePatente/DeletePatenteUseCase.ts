import { IPatenteRepository } from '../../../repositories/IPatenteRepository';

interface IPatenteRequest {
  ID: string;
}

export class DeletePatenteUseCase {
  constructor(private patenteRepository: IPatenteRepository) {}

  async execute({ ID }: IPatenteRequest) {
    const patenteDeletada = await this.patenteRepository.deletePatente(ID);
    return patenteDeletada;
  }
}

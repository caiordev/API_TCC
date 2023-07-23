import { IPatenteRepository } from '../../../repositories/IPatenteRepository';

export class GetPatenteUseCase {
  constructor(private patenteRepository: IPatenteRepository) {}

  async execute() {
    const listPatente = await this.patenteRepository.getPatente();
    return listPatente;
  }
}

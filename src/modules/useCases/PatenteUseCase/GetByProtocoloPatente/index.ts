import { DataBasePatenteRepository } from '../../../repositories/implementations/DataBasePatenteRepository';
import { GetByProtocoloPatenteController } from './GetByProtocoloPatenteController';
import { GetByProtocoloPatenteUseCase } from './GetByProtocoloPatenteUseCase';

const dataBasePatenteRepository = new DataBasePatenteRepository();
const getByProtocoloPatenteUseCase = new GetByProtocoloPatenteUseCase(
  dataBasePatenteRepository,
);
const getByProtocoloPatenteController = new GetByProtocoloPatenteController(
  getByProtocoloPatenteUseCase,
);

export { GetByProtocoloPatenteController, getByProtocoloPatenteController };

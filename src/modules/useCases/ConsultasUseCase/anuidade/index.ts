import { DataBaseConsultasRepository } from '../../../repositories/implementations/DataBaseConsultasRepository';
import { AnuidadeConsultaController } from './AnuidadeConsultaController';
import { AnuidadeConsultaUseCase } from './AnuidadeConsultaUseCase';

const dataBaseConsultasRepository = new DataBaseConsultasRepository();
const anuidadeConsultaUseCase = new AnuidadeConsultaUseCase(
  dataBaseConsultasRepository,
);
const anuidadeConsultaController = new AnuidadeConsultaController(
  anuidadeConsultaUseCase,
);

export { AnuidadeConsultaController, anuidadeConsultaController };

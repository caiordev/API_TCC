import { DataBaseConsultasRepository } from '../../../repositories/implementations/DataBaseConsultasRepository';
import { TesteController } from './TesteController';
import { TesteUseCase } from './TesteUseCase';

const dataBaseConsultasRepository = new DataBaseConsultasRepository();
const testeUseCase = new TesteUseCase(dataBaseConsultasRepository);
const testeController = new TesteController(testeUseCase);

export { TesteController, testeController };

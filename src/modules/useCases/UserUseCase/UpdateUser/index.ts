import { DataBaseUserRepository } from '../../../repositories/implementations/DataBaseUserRepository';
import { UpdateUserController } from './UpdateUserController';
import { UpdateUserUseCase } from './UpdateUserUseCase';

const dataBaseUserRepository = new DataBaseUserRepository();
const updateUserUseCase = new UpdateUserUseCase(dataBaseUserRepository);
const updateUserController = new UpdateUserController(updateUserUseCase);

export { UpdateUserController, updateUserController };

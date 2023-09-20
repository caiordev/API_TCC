import { DataBaseUserRepository } from '../../../repositories/implementations/DataBaseUserRepository';
import { DeleteUserController } from './DeleteUserController';
import { DeleteUserUseCase } from './DeleteUserUseCase';

const dataBaseUserRepository = new DataBaseUserRepository();
const deleteUserUseCase = new DeleteUserUseCase(dataBaseUserRepository);
const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { DeleteUserController, deleteUserController };

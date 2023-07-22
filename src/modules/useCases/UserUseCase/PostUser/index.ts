import { DataBaseUserRepository } from '../../../repositories/implementations/DataBaseUserRepository';
import { CreateUserController } from './PostUserController';
import { CreateUserUseCase } from './PostUserUseCase';

const dataBaseUserRepository = new DataBaseUserRepository();
const createUserUseCase = new CreateUserUseCase(dataBaseUserRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { CreateUserController, createUserController };

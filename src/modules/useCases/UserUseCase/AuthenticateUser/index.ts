import { DataBaseUserRepository } from "../../../repositories/implementations/DataBaseUserRepository";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

const dataBaseUserRepository = new DataBaseUserRepository();

const authenticateUserUseCase = new AuthenticateUserUseCase(
  dataBaseUserRepository
);

const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase
);

export { authenticateUserController, AuthenticateUserController };

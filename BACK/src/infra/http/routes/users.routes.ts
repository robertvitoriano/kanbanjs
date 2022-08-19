import { response, Router } from 'express'
import { CreateUserController } from '../../../domain/User/UseCases/CreateUser/CreateUserController';
import { LoginController } from '../../../domain/User/UseCases/Login/LoginController';
const usersRouter = Router();

const createUserController = new CreateUserController();
const loginController = new LoginController();

usersRouter.post('/users', createUserController.handle);
usersRouter.post('/users/login',loginController.handle);

export { usersRouter }
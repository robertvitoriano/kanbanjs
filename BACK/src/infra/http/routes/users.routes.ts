import { response, Router } from 'express'
import { CreateUserController } from '../../../domain/User/UseCases/CreateUser/CreateUserController';

const usersRouter = Router();

const createUserController = new CreateUserController();

usersRouter.post('/users', createUserController.handle);

export { usersRouter }
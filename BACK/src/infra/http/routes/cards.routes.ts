import { Router } from 'express'
import { CreateCardController } from './../../../domain/Cards/UseCases/CreateCard/CreateCardController';
import { authentication } from '../middlewares/authentication';
const cardsRouter = Router();
const createCardController = new CreateCardController();
cardsRouter.post('/cards', authentication, createCardController.handle);

export { cardsRouter }
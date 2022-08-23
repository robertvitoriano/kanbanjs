import { Router } from 'express'
import { CreateCardController } from './../../../domain/Cards/UseCases/CreateCard/CreateCardController';

const cardsRouter = Router();
const createCardController = new CreateCardController();

cardsRouter.post('/cards', createCardController.handle);

export { cardsRouter }
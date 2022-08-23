import { Router } from 'express'
import { CreateCardController } from './../../../domain/Cards/UseCases/CreateCard/CreateCardController';
import { GetCardController } from '../../../domain/Cards/UseCases/GetCards/GetCardsController';
import { authentication } from '../middlewares/authentication';
const cardsRouter = Router();
const createCardController = new CreateCardController();
const getCardsController = new GetCardController();
cardsRouter.post('/cards', authentication, createCardController.handle);
cardsRouter.get('/cards', authentication, getCardsController.handle)

export { cardsRouter }
import { Router } from 'express'
import { CreateCardController } from './../../../domain/Cards/UseCases/CreateCard/CreateCardController';
import { GetCardController } from '../../../domain/Cards/UseCases/GetCards/GetCardsController';
import { UpdateCardController } from './../../../domain/Cards/UseCases/UpdateCard/UpdateCardController'
import { DeleteCardController } from '../../../domain/Cards/UseCases/DeleteCard/DeleteCardController';
import { authentication } from '../middlewares/authentication';
import { logDate } from '../middlewares/logDate';

const cardsRouter = Router();

const createCardController = new CreateCardController();
const getCardsController = new GetCardController();
const updateCardController = new UpdateCardController();
const deleteCardController = new DeleteCardController();

cardsRouter.post('/cards', authentication, createCardController.handle);
cardsRouter.get('/cards', authentication, getCardsController.handle)
cardsRouter.put('/cards/:id', authentication, logDate, updateCardController.handle)
cardsRouter.delete('/cards/:id', authentication, logDate, deleteCardController.handle)

export { cardsRouter }
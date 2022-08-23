import { Router } from 'express'
import { usersRouter } from './users.routes'
import { cardsRouter } from './cards.routes';

const routes = Router();

routes.use(usersRouter);
routes.use(cardsRouter)

export { routes }
import {GetCardsUseCase} from '../UseCases/GetCards/GetCardsUseCase'
import { CardsRepository } from '../Infra/Repositories/CardsRepository';
export function getCardsUseCaseFactory(){
  const cardsRepository = new CardsRepository();
  return new GetCardsUseCase(cardsRepository);
}
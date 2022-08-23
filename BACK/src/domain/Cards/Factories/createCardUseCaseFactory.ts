import {CreateCardUseCase} from '../UseCases/CreateCard/CreateCardUseCase'
import { CardsRepository } from '../Infra/Repositories/CardsRepository';
export function createCardUseCaseFactory(){
  const cardsRepository = new CardsRepository();
  return new CreateCardUseCase(cardsRepository);
}
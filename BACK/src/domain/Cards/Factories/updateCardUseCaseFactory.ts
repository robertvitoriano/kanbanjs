import { UpdateCardUseCase } from '../UseCases/UpdateCard/UpdateCardUseCase'
import { CardsRepository } from '../Infra/Repositories/CardsRepository';
export function updateCardUseCaseFactory() {
  const cardsRepository = new CardsRepository();
  return new UpdateCardUseCase(cardsRepository);
}
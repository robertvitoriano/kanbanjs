import { DeleteCardUseCase } from '../UseCases/DeleteCard/DeleteCardUseCase'
import { CardsRepository } from '../Infra/Repositories/CardsRepository';
export function deleteCardUseCaseFactory() {
  const cardsRepository = new CardsRepository();
  return new DeleteCardUseCase(cardsRepository);
}
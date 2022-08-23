import { ICardsRepository } from "../../Repositories/ICardsRepository";
import { CardAttributes as Card } from "../../../../../models/card"
export class GetCardsUseCase {
  constructor(private cardsRepository:ICardsRepository){}
  async execute():Promise<Card[]>{
    return this.cardsRepository.getCards()
  }
  
}
import { ICardsRepository } from "../../Repositories/ICardsRepository";
import { CardAttributes as Card } from "../../../../../models/card"
export class UpdateCardUseCase {
  constructor(private cardsRepository:ICardsRepository){}
  async execute(card:Card, cardId:string):Promise<Card>{
    return this.cardsRepository.updateCard(card, cardId)
  }
  
}
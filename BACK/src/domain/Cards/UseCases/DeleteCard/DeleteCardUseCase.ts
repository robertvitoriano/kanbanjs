import { ICardsRepository } from "../../Repositories/ICardsRepository";
import { CardAttributes as Card } from "../../../../../models/card"
export class DeleteCardUseCase {
  constructor(private cardsRepository:ICardsRepository){}
  async execute(id:string):Promise<void>{
    return this.cardsRepository.deleteCard(id)
  }
  
}
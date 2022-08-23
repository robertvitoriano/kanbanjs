import { ICardsRepository } from "../../Repositories/ICardsRepository";
import { CardAttributes as Card } from "../../../../../models/card"
import { ICreateCardDTO } from "../../DTOS/ICreateCardDTO";
export class CreateCardUseCase {
  constructor(private cardsRepository:ICardsRepository){}

  async execute(data:ICreateCardDTO):Promise<Card>{
    return this.cardsRepository.createCard(data)
  }
  
}
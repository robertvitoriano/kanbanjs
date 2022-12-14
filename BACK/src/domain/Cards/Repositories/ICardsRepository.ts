import { CardAttributes as Card } from "../../../../models/card"
import { ICreateCardDTO } from "../DTOS/ICreateCardDTO"

export interface ICardsRepository {
  createCard(data:ICreateCardDTO):Promise<Card>
  getCards():Promise<Card[]>
  findCardById(id:string):Promise<Card>
  updateCard(data:ICreateCardDTO, cardId:string):Promise<Card>
  deleteCard(id:string):Promise<void>
}
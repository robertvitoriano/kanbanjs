import { CardAttributes as Card } from "../../../../models/card"
import { ICreateCardDTO } from "../DTOS/ICreateCardDTO"

export interface ICardsRepository {
  createCard(data:ICreateCardDTO):Promise<Card>
  findCard(title:string, content?:string):Promise<Card>
  findCardById(id:string):Promise<Card>

}
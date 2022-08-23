import { CardAttributes as Card} from '../../../../../models/card';
import { ICreateCardDTO } from '../../DTOS/ICreateCardDTO';
import { ICardsRepository } from '../../Repositories/ICardsRepository';
import db from './../../../../../models'
import { v4 as uuid } from 'uuid'

export class CardsRepository implements ICardsRepository {
  deleteCard(id:string): Promise<void> {
    return db.card.destroy({
      where:{
        id
      }
    });
  }
  updateCard(data: ICreateCardDTO, cardId:string): Promise<Card> {
    return db.card.update(data,{
      where:{
        id:cardId
      }
    })
  }

  createCard(data: ICreateCardDTO): Promise<Card> {
    return db.card.create({
      ...data,
      id:uuid(),
    })
  }
  getCards(): Promise<Card[]> {
    return db.card.findAll();
  }
  findCardById(id: string): Promise<Card> {
    throw new Error('Method not implemented.');
  }

}

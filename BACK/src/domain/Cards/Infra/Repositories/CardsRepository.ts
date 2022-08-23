import { CardAttributes as Card} from '../../../../../models/card';
import { ICreateCardDTO } from '../../DTOS/ICreateCardDTO';
import { ICardsRepository } from '../../Repositories/ICardsRepository';
import db from './../../../../../models'
import { v4 as uuid } from 'uuid'

export class CardsRepository implements ICardsRepository {

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

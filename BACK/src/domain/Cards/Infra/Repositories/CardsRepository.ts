import { CardAttributes } from '../../../../../models/card';
import { ICreateCardDTO } from '../../DTOS/ICreateCardDTO';
import { ICardsRepository } from '../../Repositories/ICardsRepository';
import db from './../../../../../models'
import { v4 as uuid } from 'uuid'

export class CardsRepository implements ICardsRepository {
  createCard(data: ICreateCardDTO): Promise<CardAttributes> {
    return db.card.create({
      ...data,
      id:uuid(),
    })
  }
  findCard(title: string, content?: string | undefined): Promise<CardAttributes> {
    throw new Error('Method not implemented.');
  }
  findCardById(id: string): Promise<CardAttributes> {
    throw new Error('Method not implemented.');
  }

}

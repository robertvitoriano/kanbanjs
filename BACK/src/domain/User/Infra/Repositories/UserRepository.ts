import { UserTributes } from '../../../../../models/user';
import { ICreateUserDTO } from '../../DTOS/ICreateUserDTO';
import { IUserRepository } from '../../Repositories/IUserRepository';
import db from './../../../../../models'
import {v4 as uuid} from 'uuid'
import {hash} from 'bcrypt'

export class UserRepository implements IUserRepository{
 async createUser(data: ICreateUserDTO): Promise<UserTributes> {
    const hashedPassword = await hash(data.password, 8)
    const createdUser =  await db.user.create({...data, id:uuid(), password:hashedPassword})
    return createdUser
  }
}

import { UserTributes } from '../../../../../models/user';
import { ICreateUserDTO } from '../../DTOS/ICreateUserDTO';
import { IUserRepository } from '../../Repositories/IUserRepository';
import db from './../../../../../models'
import { v4 as uuid } from 'uuid'
import { hash } from 'bcrypt'

export class UserRepository implements IUserRepository {
  findUserById(id: string): Promise<UserTributes> {
    return db.user.findOne({ where: { id } })
  }
  findUser(userName?: string, email?: string): Promise<UserTributes> {
    if(userName && email) return db.user.findOne({ where: { username: userName, email: email } })
    if(userName) return db.user.findOne({ where: { username: userName } })
    return db.user.findOne({ where: { email: email } })
  }
  
  async createUser(data: ICreateUserDTO): Promise<UserTributes> {
    const hashedPassword = await hash(data.password, 8)
    const createdUser = await db.user.create({ ...data, id: uuid(), password: hashedPassword })
    const { username, email, name } = createdUser

    return{
      username,
      email,
      name
    }

  }
}

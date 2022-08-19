import { UserTributes as User } from "../../../../models/user"
import { ICreateUserDTO } from "../DTOS/ICreateUserDTO"

export interface IUserRepository {
  createUser(data:ICreateUserDTO):Promise<User>
  findUser(userName:string, email?:string):Promise<User>
  findUserById(id:string):Promise<User>

}
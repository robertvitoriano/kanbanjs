import { IUserRepository } from "../../Repositories/IUserRepository";
import { ICreateUserDTO } from "../../DTOS/ICreateUserDTO";
import { UserTributes as User } from "../../../../../models/user";
export class CreateUserUseCase {
  constructor(private userRepository:IUserRepository){}

  async execute(data:ICreateUserDTO):Promise<User>{
    return this.userRepository.createUser(data)
  }
  
}
import { IUserRepository } from "../../Repositories/IUserRepository";
import { ILoginDTO } from "../../DTOS/ILoginDTO";
import { UserTributes as User } from "../../../../../models/user";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
export class LoginUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: ILoginDTO): Promise<{user:User, token:string}> {
    const user = await this.userRepository.findUser(data.username);
    if (!user) throw new Error("Wrong Credentials");
    const isPasswordValid = await compare(data.password, String(user.password));
    if (!isPasswordValid) throw new Error("Wrong Credentials");
    const token = sign(String(user.id), String(process.env.JWT_SECRET));
    delete user.password;
    return {user:user, token};
  }
}
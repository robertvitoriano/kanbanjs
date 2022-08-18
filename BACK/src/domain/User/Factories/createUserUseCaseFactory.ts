import {CreateUserUseCase} from '../UseCases/CreateUser/CreateUserCase'
import { UserRepository } from '../Infra/Repositories/UserRepository';
export function createUserUseCaseFactory(){
  const userRepository = new UserRepository();
  return new CreateUserUseCase(userRepository);
}
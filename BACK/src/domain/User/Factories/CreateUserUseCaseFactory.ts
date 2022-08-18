import {CreateUserUseCase} from '../UseCases/CreateUserCase'
import { UserRepository } from '../Infra/Repositories/UserRepository';
export function CreateUserUseCaseFactory(){
  const userRepository = new UserRepository();
  return new CreateUserUseCase(userRepository);
}
import {LoginUseCase} from '../UseCases/Login/LoginUseCase'
import { UserRepository } from '../Infra/Repositories/UserRepository';
export function loginUseCaseFactory(){
  const userRepository = new UserRepository();
  return new LoginUseCase(userRepository);
}
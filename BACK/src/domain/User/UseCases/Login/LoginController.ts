import { loginUseCaseFactory } from "../../Factories/loginUseCaseFactory"
import {Request, Response} from 'express'
export class LoginController {
  async handle(request:Request, response:Response):Promise<Response>{
    try{
     const loginUseCase =  loginUseCaseFactory();
     const sessionInfo = await loginUseCase.execute(request.body)
     return response.status(200).json(sessionInfo)
    }catch(error:any){
      console.error(error)
      return response.status(400).json({error:error.message})
    }
  }
}
import { createUserUseCaseFactory } from "../../Factories/createUserUseCaseFactory"
import {Request, Response} from 'express'
export class CreateUserController {
  async handle(request:Request, response:Response):Promise<Response>{
    try{
     const createUserUseCase =  createUserUseCaseFactory();
     const user = await createUserUseCase.execute(request.body)
     return response.json(user)
    }catch(error:any){
      console.error(error)
      return response.status(400).json({error:error.message})
    }
  }
}
import { createCardUseCaseFactory } from "./../../Factories/createCardUseCaseFactory"
import {Request, Response} from 'express'
export class CreateCardController {
  async handle(request:Request, response:Response):Promise<Response>{
    try{
     const createCardUseCase =  createCardUseCaseFactory();
     const card = await createCardUseCase.execute(request.body)
     return response.json(card)
    }catch(error:any){
      console.error(error)
      return response.status(400).json({error:error.message})
    }
  }
}
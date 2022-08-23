import { updateCardUseCaseFactory } from "./../../Factories/updateCardUseCaseFactory"
import {Request, Response} from 'express'
export class UpdateCardController {
  async handle(request:Request, response:Response):Promise<Response>{
    try{
     const updateCardUseCase =  updateCardUseCaseFactory();
     const card = await updateCardUseCase.execute(request.body, request.params.id)
     return response.json(card)
    }catch(error:any){
      console.error(error)
      return response.status(400).json({error:error.message})
    }
  }
}
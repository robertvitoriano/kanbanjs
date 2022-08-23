import { getCardsUseCaseFactory } from "../../Factories/getCardsUseCaseFactory"
import {Request, Response} from 'express'
export class GetCardController {
  async handle(request:Request, response:Response):Promise<Response>{
    try{
     const getCardUseCase =  getCardsUseCaseFactory();
     const card = await getCardUseCase.execute()
     return response.json(card)
    }catch(error:any){
      console.error(error)
      return response.status(400).json({error:error.message})
    }
  }
}
import { deleteCardUseCaseFactory } from "../../Factories/deleteCardUseCaseFactory"
import { Request, Response } from 'express'
export class DeleteCardController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const deleteCardUseCase = deleteCardUseCaseFactory();
      const card = await deleteCardUseCase.execute(request.params.id)
      return response.json(card)
    } catch (error: any) {
      console.error(error)
      return response.status(400).json({ error: error.message })
    }
  }
}
import { Response, Request, NextFunction } from 'express';
import { format } from 'date-fns'
import db from './../../../../models'
export async function logDate(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const currentDate = format(new Date(), 'dd/MM/yyyy - H:mm:ss')
    if (req.route.path === "/cards/:id") {
      const card = await db.card.findOne({ where: { id: req.params.id } })
      if (card) {
        switch (req.method) {
          case 'DELETE':
            console.log(`${currentDate} - ${card.titulo} - Removido`)
          case 'PUT':
            console.log(`${currentDate} - ${card.titulo} - Alterado`)
        }
      }
    }
    next()
  } catch (error) {
    console.error(error)
    res.status(500).send("Internal Server Error")
  }

}
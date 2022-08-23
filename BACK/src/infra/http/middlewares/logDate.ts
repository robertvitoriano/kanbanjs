import { Response, Request, NextFunction } from 'express';
import { format } from 'date-fns'

export async function logDate(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const currentDate = format(new Date(), 'dd/MM/yyyy - H:m:ss')
    // console.log(currentDate)
    next()
  } catch (error) {
    console.error(error)
    res.status(500).send("Internal Server Error")
  }

}
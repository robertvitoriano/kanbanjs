import { Response, Request, NextFunction } from 'express';
import { UserRepository } from '../../../domain/User/Infra/Repositories/UserRepository';
import { verify } from 'jsonwebtoken';
interface IPayload {
  sub: string;
}

export async function authentication(req: Request, res: Response, next: NextFunction): Promise<void> {

  if (!req.headers.authorization) throw new Error('token is missing');
  const token = req.headers.authorization.split(' ')[1];

  try {
    const userId = verify(token, String(process.env.JWT_SECRET)) as IPayload;
    if (!userId) throw new Error('token is invalid');
    const userRepository = new UserRepository();
    const user = await userRepository.findUserById(String(userId))
    if (!user) throw new Error('User not found');
    req.user = {id:String(userId), username:user.username, email:user.email, name:user.name};
    next();

  } catch(error) {
    console.error(error)
    res.status(401).send("Forbidden")
  }

}
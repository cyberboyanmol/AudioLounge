import { NextFunction, Request, RequestHandler, Response } from 'express';
import Api from '../../lib/Api';

export class AuthController extends Api {
  constructor() {
    super();
  }

  public SignUpHandler: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      this.send(res, { env: process.env.DATABASE_URL }, 'route is hitting the signup ');
    } catch (err) {
      next(err);
    }
  };
}

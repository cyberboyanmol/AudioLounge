import { Request, RequestHandler, Response } from 'express';
import Api from '@/lib/api';

export class GoogleController extends Api {
  constructor() {
    super();
  }

  public signInWithgoogle: RequestHandler = (req: Request, res: Response) => {
    this.send(res, null, 'google handler');
  };
}

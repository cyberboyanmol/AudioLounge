import { NextFunction, Request, RequestHandler, Response } from 'express';
import Api from 'lib/api';
import { UserService } from './user.service';
import { CustomRequest } from 'interfaces/request.interface';
import { DecodedToken as user } from 'utils';

export class UserController extends Api {
  private readonly userServie: UserService;
  constructor() {
    super();
    this.userServie = new UserService();
  }

  public getMyProfileHandler: RequestHandler = async (req: CustomRequest<user>, res: Response, next: NextFunction) => {
    try {
      const userId = req.user.userId;
      const user = await this.userServie.getProfile(userId);
    } catch (err) {
      next(err);
    }
  };
}

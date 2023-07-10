import { NextFunction, Request, RequestHandler, Response } from 'express';
import Api from 'lib/api';
import { UserService } from './user.service';
import { HttpExceptionError } from 'exceptions/http.exception';
import { globalConstants } from 'lib/constants';

export class UserController extends Api {
  private readonly userServie: UserService;
  constructor() {
    super();
    this.userServie = new UserService();
  }

  public getMyProfileHandler: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new HttpExceptionError(
          globalConstants.statusCode.UnauthorizedException.code,
          ' Unauthorized login first !',
        );
      }
      const user = await this.userServie.getProfile(req.user.userId);
      this.send(res, user, 'Your profile details');
    } catch (err) {
      next(err);
    }
  };
}

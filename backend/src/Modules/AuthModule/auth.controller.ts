import { NextFunction, Request, RequestHandler, Response } from 'express';
import Api from '../../lib/Api';
import prisma from 'lib/prisma-client';
import { AuthService } from './auth.service';
import { CustomResponse } from 'interfaces/response.interface';
import { AuthDto } from './dtos/auth.dto';

export class AuthController extends Api {
  private readonly AuthService: AuthService;

  constructor() {
    super();
    this.AuthService = new AuthService();
  }

  public EmailSignUpHandler: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this.AuthService.SignUpWithEmail(req.body);

      this.send(res, response, `Otp send successfully to your `);
    } catch (err) {
      next(err);
    }
  };
}

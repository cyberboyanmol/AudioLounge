import { NextFunction, Request, RequestHandler, Response } from 'express';
import Api from '../../../lib/api';
import { AuthService } from '../services/auth.service';
import { CustomResponse } from '../../../interfaces/response.interface';
import { AuthDto } from '../dtos/auth.dto';

export class AuthController extends Api {
  private readonly AuthService: AuthService;

  constructor() {
    super();
    this.AuthService = new AuthService();
  }

  public EmailSignUpHandler: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this.AuthService.signUpWithEmail(req.body);

      this.send(res, response, `Otp send successfully to your `);
    } catch (err) {
      next(err);
    }
  };

  public VerifyOtpHandler: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this.AuthService.verifyOtp(req.body);
      this.send(res, response, `Otp verify successfully`);
    } catch (err) {
      next(err);
    }
  };

  public CreateNewAccountHandler: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this.AuthService.createNewAccount(req.body);

      this.send(res, response, 'your new account created successfully');
    } catch (err) {
      next(err);
    }
  };
}

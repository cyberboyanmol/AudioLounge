import { AuthController } from './controllers/auth.controller';
import { Router } from 'express';
import type { Route } from '../../interfaces/route.interface';
import { createValidationPipe } from '../../middlewares/request-validation.middleware';
import { AuthDto } from './dtos/auth.dto';
import { VerifyOtpDto } from './dtos/verifyotp.dto';

export class AuthRoute implements Route {
  public readonly path = '/auth';
  public router = Router();
  public authController = new AuthController();
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.post(`${this.path}/email`, createValidationPipe(AuthDto), this.authController.EmailSignUpHandler);
    this.router.post(
      `${this.path}/verify-otp`,
      createValidationPipe(VerifyOtpDto),
      this.authController.VerifyOtpHandler,
    );

    this.router.post(
      `${this.path}/account/new`,
      createValidationPipe(VerifyOtpDto),
      this.authController.CreateNewAccountHandler,
    );
  }
}

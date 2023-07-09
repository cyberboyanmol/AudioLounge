import { AuthController } from './controllers/auth.controller';
import { Router } from 'express';
import type { Route } from '../../interfaces/route.interface';
import { createValidationPipe } from '../../middlewares/request-validation.middleware';
import { AuthDto } from './dtos/auth.dto';
import { VerifyOtpDto } from './dtos/verifyotp.dto';
import { GoogleController } from './controllers/google.controller';
import { RefreshAccessToken } from './controllers/refreshAccessToken.controller';

export class AuthRoute implements Route {
  public readonly path = '/auth';
  public router = Router();
  public authController = new AuthController();
  public googleController = new GoogleController();
  public refreshAccessToken = new RefreshAccessToken();
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.post(`${this.path}/login`, createValidationPipe(AuthDto), this.authController.EmailSignUpHandler);
    // otp verification
    this.router.post(
      `${this.path}/verify-otp`,
      createValidationPipe(VerifyOtpDto),
      this.authController.VerifyOtpHandler,
    );

    this.router.get(`${this.path}/refresh`, this.refreshAccessToken.refreshAccessTokenHandler);
    // google route

    this.router.get(`${this.path}/logout`, this.authController.logoutHandler);

    this.router.get(`${this.path}/google`, this.googleController.signInWithgoogle);
  }
}

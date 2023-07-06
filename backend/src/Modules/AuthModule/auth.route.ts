import { AuthController } from './auth.controller';
import { Router } from 'express';
import type { Route } from '../../interfaces/route.interface';
import { createValidationPipe } from '../../middlewares/request-validation.middleware';
import { AuthDto } from './dtos/auth.dto';

export class AuthRoute implements Route {
  public readonly path = '/auth';
  public router = Router();
  public authController = new AuthController();
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get(`${this.path}/email`, createValidationPipe(AuthDto), this.authController.EmailSignUpHandler);
  }
}

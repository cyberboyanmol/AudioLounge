import { Router } from 'express';
import { Route } from 'interfaces';
import { UserController } from './user.controller';

import { isAuthenticated } from 'middlewares/auth.middleware';

export class UserRoute implements Route {
  public readonly path = '/user';
  public router = Router();
  public userController = new UserController();
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/me`, isAuthenticated, this.userController.getProfileHandler);
  }
}

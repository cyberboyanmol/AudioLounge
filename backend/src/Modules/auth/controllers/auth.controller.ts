import { NextFunction, Request, RequestHandler, Response } from 'express';
import Api from '../../../lib/api';
import { AuthService } from '../services/auth.service';
import { CustomResponse } from '../../../interfaces/response.interface';
import { AuthDto } from '../dtos/auth.dto';
import { HttpExceptionError } from '../../../exceptions/http.exception';
import { globalConstants } from '../../../lib/constants';
import { OtpService } from '../../../utils';

export class AuthController extends Api {
  private readonly AuthService: AuthService;
  private readonly OtpService: OtpService;

  constructor() {
    super();
    this.AuthService = new AuthService();
    this.OtpService = new OtpService();
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
      const { hash, email, otp } = req.body;
      const [otphashed, expireTime] = hash.split('.');

      // check is otp expired
      if (Date.now() > +expireTime) {
        throw new HttpExceptionError(
          globalConstants.statusCode.BadRequestException.code,
          'Expired OTP (One time password) !',
        );
      }

      //check is otp is valid
      const data = `${email}${otp}${expireTime}`;
      const isValid = await this.OtpService.verifyHash(otphashed, data);

      if (!isValid) {
        throw new HttpExceptionError(
          globalConstants.statusCode.BadRequestException.code,
          'Invalid OTP (One time password)',
        );
      }
      //  is user exist
      const user = await this.AuthService.findUser(email);

      if (!user) {
        // create the user
        // and generate the access token and refresh token
        // this.redirect(req, res, 'account/new');
        const newUser = await this.AuthService.createNewAccount(req.body);
        this.send(res, newUser, 'Account created successfully');
      } else {
        if (user?.provider === 'LOCAL') {
          // generate the access token and refresh token and send back to user
          this.send(res, null, 'login handler');
        } else {
          this.redirect(req, res, 'google');
        }
      }
    } catch (err) {
      next(err);
    }
  };
}

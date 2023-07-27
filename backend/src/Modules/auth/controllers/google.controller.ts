import { NextFunction, Request, RequestHandler, Response } from 'express';
import Api from '@/lib/api';
import { Profile } from 'passport-google-oauth20';
import { GoogleService } from '../services/google.service';
import { GoogleUser } from '../interfaces';
import { User } from '@prisma/client';
import { setRefreshToken } from '@/utils';
import { RefreshAccessTokenService } from '../services/refreshAccessToken.service';
import { getConfig } from '@/config';
import { AuthService } from '../services/auth.service';
import { MailService } from '@/lib/mailer.service';
import { sendMail } from '@/interfaces';
import { UserService } from '@/modules/user/user.service';
import { GoogleAccountLink } from '../dtos/google.dto';

export class GoogleController extends Api {
  private readonly GoogleService: GoogleService;
  private readonly AuthService: AuthService;
  private readonly RefreshAccessTokenService: RefreshAccessTokenService;
  private readonly mailService: MailService;
  private readonly UserService: UserService;

  constructor() {
    super();
    this.GoogleService = new GoogleService();
    this.RefreshAccessTokenService = new RefreshAccessTokenService();
    this.AuthService = new AuthService();
    this.AuthService = new AuthService();
    this.UserService = new UserService();
    this.mailService = new MailService();
  }

  public signInWithgoogle: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as Profile;

    const data: GoogleUser = {
      email: user._json.email as string,
      name: user._json.name as string,
      avatar: user._json.picture as string,
      googleId: user._json.sub,
      activated: true,
      provider: 'GOOGLE',
    };

    const User = await this.AuthService.findUser(data.email);
    try {
      if (!User) {
        const newUser = (await this.GoogleService.createUserWithGoogle(data)) as User;

        const templateData = {
          name: newUser.name as string,
          imageUrl: 'https://i.imgur.com/twND8zP.png',
        };

        const mailData: sendMail = {
          templateName: 'Welcome',
          recipientEmail: newUser.email as string,
          subject: 'Welcome to AudioLounge! Join the audio revolution 🎧🌟',
          templateData,
          EventType: '',
        };

        this.mailService.sendMail(mailData);
        await this.addedRefreshTokenToDB(newUser, res);
      } else {
        if (User.provider === 'LOCAL') {
          // if local user used signInWithGoogle then we update the googleId
          await this.UserService.updateUser<GoogleAccountLink>(User.userId, {
            googleId: data.googleId,
          });
        }
        // if (User.provider === 'GOOGLE') {
        const cookies = req.cookies;

        if (cookies.jwt) {
          const refreshToken = cookies.jwt;
          const foundUser = await this.RefreshAccessTokenService.findUserBasedOnRefreshToken(refreshToken);

          if (foundUser) {
            await this.RefreshAccessTokenService.removeRefreshToken(User.userId, refreshToken);
          } else {
            await this.RefreshAccessTokenService.deleteAllRefreshTokenForUser(User.userId);
          }
          res.clearCookie('jwt', { httpOnly: true, sameSite: 'none', secure: true });
        }
        await this.addedRefreshTokenToDB(User, res);

        // } else {
        //   this.send(res, null, 'login with email ', globalConstants.statusCode.ForbiddenException.code);
        // }
      }

      this.redirect(req, res, `${getConfig().FRONTEND_URL}/dashboard`);
    } catch (err) {
      next(err);
    }
  };

  public addedRefreshTokenToDB = async (User: User, res: Response) => {
    const newRefreshToken = await setRefreshToken({
      email: User.email,
      userId: User.userId,
    });

    await this.RefreshAccessTokenService.addRefreshToken(User.userId, newRefreshToken);

    res.cookie('jwt', newRefreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: getConfig().JWT_REFRESH_TOKEN_COOKIE_EXPIRATION,
    });
  };
}

import { MailService } from '../../../lib/mailer.service';
import prisma from '../../../lib/prisma-client';
import { AuthDto } from '../dtos/auth.dto';
import { sendMail } from '../../../interfaces/sendmail.interface';
import { logger } from '../../../lib/logger';
import { VerifyOtpDto } from '../dtos/verifyotp.dto';
import { OtpService } from '../../../utils';

export class AuthService {
  private readonly prisma = prisma;
  private readonly OtpService;
  private readonly MailService;
  constructor() {
    this.MailService = new MailService();
    this.OtpService = new OtpService();
  }

  public async signUpWithEmail({ email }: AuthDto) {
    logger.info('SignUpWithEmail', email);

    const newotp = await this.OtpService.otpGenerator();

    // otp expiration time
    const expireIn = 1000 * 60 * 5;

    const expireTime = Date.now() + expireIn;

    const data = `${email}${newotp}${expireTime}`;

    const otphashed = await this.OtpService.hashGenerator(data);

    const templateData = {
      otp: `${newotp}`,
      imageUrl: 'https://i.imgur.com/twND8zP.png',
    };

    const mailData: sendMail = {
      templateName: 'OtpVerify',
      recipientEmail: email,
      subject: 'OTP to complete the sign-up for your new Audio Lounge account!',
      templateData,
      EventType: '',
    };

    this.MailService.sendMail(mailData);
    return { email, hash: `${otphashed}.${expireTime}` };
  }

  public async verifyOtp({ email, hash, otp }: VerifyOtpDto) {
    // verify otp

    const [otphashed, expireTime] = hash.split('.');

    if (Date.now() > +expireTime) {
    }

    // const data = `${email}${otp}${expireTime}`;

    // const isUser = await this.prisma.user.findUnique({
    //   where: {
    //     email: email,
    //   },
    // });
  }

  public async createNewAccount({ email }: VerifyOtpDto) {
    return { email };
  }
}

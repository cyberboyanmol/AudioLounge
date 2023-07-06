import { MailService } from 'lib/mailer.service';
import prisma from '../../lib/prisma-client';
export class AuthService {
  private readonly prisma: typeof prisma;
  private MailService;
  constructor() {
    this.prisma = prisma;
    this.MailService = new MailService();
  }

  public async SignUpWithEmail(email: string) {
    console.log('SignUpWithEmail', email);
    const templateData = {
      name: 'Anmol',
      otp: '783744',
      imageUrl: 'https://i.imgur.com/twND8zP.png',
    };

    this.MailService.sendMail(
      'OtpVerify',
      'anmolgangwar64@gmail.com',
      'OTP to complete the sign-up for your new Audio Lounge account!',
      templateData,
    );
    return email;
  }
}

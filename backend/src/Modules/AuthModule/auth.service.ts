import { MailService } from 'lib/mailer.service';
import prisma from '../../lib/prisma-client';
import { sendMail } from 'interfaces/sendmail.interface';
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

    const mailData = {
      templateName: 'OtpVerify',
      recipientEmail: [email, 'anmolgangwar29512@gmail.com', 'ishi.robin59@gmail.com'],
      subject: 'OTP to complete the sign-up for your new Audio Lounge account!',
      templateData,
      EventType: '',
    };

    this.MailService.sendMail(mailData);
    return email;
  }
}

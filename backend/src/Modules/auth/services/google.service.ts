import { MailService } from '@/lib/mailer.service';
import prisma from '@/lib/prisma-client';
import { GoogleUser } from '../interfaces';

export class GoogleService {
  private readonly prisma = prisma;
  private readonly MailService;
  constructor() {
    this.MailService = new MailService();
  }

  public async createUserWithGoogle({ name, email, googleId, avatar }: GoogleUser) {
    const newUser = await this.prisma.user.create({
      data: {
        name,
        email,
        googleId,
        avatar,
        activated: true,
        provider: 'GOOGLE',
      },
    });
    return newUser;
  }
}

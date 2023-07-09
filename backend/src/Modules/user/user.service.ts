import { Router } from 'express';
import prisma from '../../lib/prisma-client';

export class UserService {
  private readonly prisma = prisma;

  constructor() {
    this.prisma = prisma;
  }

  public async getProfile(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        userId,
      },
      include: {
        registeredRoom: true,
        roomcreatedByme: true,
      },
    });
    return user;
  }
}

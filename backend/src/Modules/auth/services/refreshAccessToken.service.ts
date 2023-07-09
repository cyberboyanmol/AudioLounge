import { Refresh } from '@prisma/client';
import prisma from 'lib/prisma-client';
import { UserWithRefresh } from '../interfaces';
import { logger } from 'lib/logger';

export class RefreshAccessTokenService {
  private readonly prisma = prisma;

  constructor() {
    this.prisma = prisma;
  }

  public async findUserBasedOnRefreshToken(refreshToken: string) {
    const user = (await this.prisma.refresh.findUnique({
      where: {
        refreshtoken: refreshToken,
      },
      include: {
        user: true,
      },
    })) as UserWithRefresh | null;

    // if (user) {
    //   return await this.prisma.user.findUnique({
    //     where: {
    //       userId: user.userId,
    //     },
    //   });
    // }

    return user?.user;
  }

  public async deleteAllRefreshTokenForUser(userId: string) {
    this.prisma.user.update({
      where: {
        userId,
      },
      data: {
        refreshTokens: {
          deleteMany: {},
        },
      },
    });
  }

  public async removeRefreshToken(userId: string, refreshToken: string) {
    const updateUser = await this.prisma.user.update({
      where: {
        userId,
      },
      data: {
        refreshTokens: {
          delete: {
            refreshtoken: refreshToken,
          },
        },
      },
      include: {
        refreshTokens: true,
      },
    });

    return updateUser;
  }

  public async addRefreshToken(userId: string, newRefreshToken: string) {
    await this.prisma.refresh.create({
      data: {
        refreshtoken: newRefreshToken,
        user: {
          connect: {
            userId: userId,
          },
        },
      },
    });
  }
}

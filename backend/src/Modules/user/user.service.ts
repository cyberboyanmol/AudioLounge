import { Router } from 'express';
import prisma from '../../lib/prisma-client';
import { UserWithRefresh } from 'modules/auth/interfaces';
import { User } from '@prisma/client';
import { UpdateUserDto } from './dtos/updateUser.dto';

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
    return { user };
  }

  public async updateUser(userId: string, updateData: UpdateUserDto) {
    console.log(updateData);

    const updateUser = await this.prisma.user.update({
      where: { userId },
      data: updateData,
    });
    return updateUser;
  }
}

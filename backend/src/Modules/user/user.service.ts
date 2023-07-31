import prisma from '@/lib/prisma-client';
import { Prisma } from '@prisma/client';
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
        userInRoom: true,
        roomcreatedByme: true,
      },
    });
    return { user };
  }

  public async updateUser<T extends Prisma.UserUpdateInput>(userId: string, updateData: T) {
    console.log(updateData);

    const updateUser = await this.prisma.user.update({
      where: { userId },
      data: updateData,
    });
    return updateUser;
  }
}

import { Prisma } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class GoogleAccountLink implements Prisma.UserUpdateInput {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly googleId: string;
}

import { IsOptional, IsString } from 'class-validator';

export class UpdateUser {
  @IsOptional()
  @IsString()
  readonly name: string;
}

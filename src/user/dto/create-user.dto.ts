import { PartialType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsIn } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsIn(['user', 'admin'])
  role: string;
}
export class UpdateUserDto extends PartialType(CreateUserDto) {}

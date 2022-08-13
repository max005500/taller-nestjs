import { PartialType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBuildingStDto {
  @IsString()
  @IsNotEmpty()
  direccion: string;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  descripcion: string;

  @IsNumber()
  numero: number;

  @IsString()
  @IsEmail()
  email: string;
}
export class UpdateBuildingStDto extends PartialType(CreateBuildingStDto) {}

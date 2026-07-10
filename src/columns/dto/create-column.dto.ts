import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateColumnDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  title!: string;

  @IsNumber()
  @IsNotEmpty()
  order!: number;
}
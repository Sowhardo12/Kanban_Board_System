import { IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateColumnDto {
  @IsString()
  @IsOptional()
  @MaxLength(30)
  title?: string;

  @IsNumber()
  @IsOptional()
  order?: number;
}
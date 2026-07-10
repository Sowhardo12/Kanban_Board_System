import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  priority?: string; // LOW, MEDIUM, HIGH

  @IsInt()
  @IsNotEmpty()
  position!: number;
}
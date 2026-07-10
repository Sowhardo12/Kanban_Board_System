import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class UpdateTaskPositionDto {
  @IsString()
  @IsNotEmpty()
  columnId!: string;

  @IsInt()
  @IsNotEmpty()
  position!: number; 
}
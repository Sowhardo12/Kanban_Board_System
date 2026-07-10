import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateBoardDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50, { message: 'Board title cannot exceed 50 characters' })
  title!: string;
}
import { Controller,Get,Post,Delete,Body,Param,UseGuards } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GetUser } from 'src/auth/get-user.decorator';


@Controller('boards')
@UseGuards(JwtAuthGuard)  //all routes inside here is protected
export class BoardsController {
  constructor(private readonly boardsService:BoardsService) {}
  @Post()
  create(@Body() dto:CreateBoardDto,@GetUser() user:{id:string}){
    return this.boardsService.create(dto,user.id);
  }
  @Get()
  findAll(@GetUser() user: { id: string }) {
    return this.boardsService.findAllUserBoards(user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @GetUser() user: { id: string }) {
    return this.boardsService.findOne(id, user.id);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @GetUser() user: { id: string }) {
    return this.boardsService.remove(id, user.id);
  }
}

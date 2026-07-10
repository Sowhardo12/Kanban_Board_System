import { Controller,Post,Patch,Delete,Body,Param,UseGuards } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GetUser } from 'src/auth/get-user.decorator';

@Controller()
@UseGuards(JwtAuthGuard)
export class ColumnsController {
  constructor(private readonly columnsService: ColumnsService) {}

  @Post('boards/:id/columns')
  create(
    @Param('id') boardId: string,
    @Body() dto: CreateColumnDto,
    @GetUser() user: { id: string },
  ) {
    return this.columnsService.create(boardId, dto, user.id);
  }

  @Patch('columns/:id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateColumnDto,
    @GetUser() user: { id: string },
  ) {
    return this.columnsService.update(id, dto, user.id);
  }

  @Delete('columns/:id')
  remove(@Param('id') id: string, @GetUser() user: { id: string }) {
    return this.columnsService.remove(id, user.id);
  }
}
import { Controller,Post, Get, Patch, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskPositionDto } from './dto/update-task-position.dto';
import { GetTasksFilterDto } from './dto/get-tasls-filter.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GetUser } from 'src/auth/get-user.decorator';

@Controller()
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('columns/:id/tasks')
  create(@Param('id') columnId: string, @Body() dto: CreateTaskDto, @GetUser() user: { id: string }) {
    return this.tasksService.create(columnId, dto, user.id);
  }

  @Get('columns/:id/tasks')
  findAll(@Param('id') columnId: string, @Query() filters: GetTasksFilterDto, @GetUser() user: { id: string }) {
    return this.tasksService.findAll(columnId, filters, user.id);
  }

  @Patch('tasks/:id/position')
  movePosition(@Param('id') id: string, @Body() dto: UpdateTaskPositionDto, @GetUser() user: { id: string }) {
    return this.tasksService.moveTaskPosition(id, dto, user.id);
  }

  @Delete('tasks/:id')
  remove(@Param('id') id: string, @GetUser() user: { id: string }) {
    return this.tasksService.remove(id, user.id);
  }
}

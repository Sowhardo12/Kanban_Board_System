import { Injectable,NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskPositionDto } from './dto/update-task-position.dto';
import { GetTasksFilterDto } from './dto/get-tasls-filter.dto';

@Injectable()
export class TasksService {
  constructor(private prisma:PrismaService){}
  private async verifyColumnAccess(columnId:string,userId:string){
    const column=await this.prisma.column.findUnique({
      where:{id:columnId},
      include:{board:true},
    });
    if(!column || column.board.deletedAt) throw new NotFoundException('Column not found');
    if(column.board.ownerId!==userId)throw new ForbiddenException('Access Denied');
    return column;
  }
  async create(columnId:string,dto:CreateTaskDto,userId:string){
    await this.verifyColumnAccess(columnId, userId);
    return this.prisma.task.create({
      data: { ...dto, columnId },
    });
  }
  async findAll(columnId: string, filters: GetTasksFilterDto, userId: string) {
    await this.verifyColumnAccess(columnId, userId);

    return this.prisma.task.findMany({
      where: {
        columnId,
        deletedAt: null,
        ...(filters.priority && { priority: filters.priority }),
        ...(filters.search && {
          OR: [
            { title: { contains: filters.search, mode: 'insensitive' } },
            { description: { contains: filters.search, mode: 'insensitive' } },
          ],
        }),
      },
      orderBy: { position: 'asc' },
    });
  }
  async moveTaskPosition(taskId: string, dto: UpdateTaskPositionDto, userId: string) {
  // 1. Get task with access control
  const task = await this.prisma.task.findFirst({
    where: {
      id: taskId,
      column: { board: { ownerId: userId, deletedAt: null } }
    }
  });
  if (!task || task.deletedAt) throw new NotFoundException('Task not found');

 
  if (task.columnId !== dto.columnId) {
    const destColumn = await this.prisma.column.findFirst({
      where: { id: dto.columnId, board: { ownerId: userId, deletedAt: null } }
    });
    if (!destColumn) throw new ForbiddenException('Cannot move to this column');
  }

  // 3. Simple transaction
  return this.prisma.$transaction(async (tx) => {
    // Lock the column to prevent race conditions
    await tx.$executeRaw`
      SELECT id FROM "Task" 
      WHERE "columnId" = ${dto.columnId} AND "deletedAt" IS NULL 
      FOR UPDATE
    `;

    // Handle different column move
    if (task.columnId !== dto.columnId) {
      // Close gap in source column
      await tx.task.updateMany({
        where: { 
          columnId: task.columnId, 
          position: { gt: task.position },
          deletedAt: null 
        },
        data: { position: { decrement: 1 } }
      });

      // Make space in destination
      await tx.task.updateMany({
        where: { 
          columnId: dto.columnId, 
          position: { gte: dto.position },
          deletedAt: null 
        },
        data: { position: { increment: 1 } }
      });
    } else {
      // Same column - shift tasks
      if (task.position < dto.position) {
        // Moving down
        await tx.task.updateMany({
          where: {
            columnId: task.columnId,
            position: { gt: task.position, lte: dto.position },
            deletedAt: null,
          },
          data: { position: { decrement: 1 } }
        });
      } else if (task.position > dto.position) {
        // Moving up
        await tx.task.updateMany({
          where: {
            columnId: task.columnId,
            position: { gte: dto.position, lt: task.position },
            deletedAt: null,
          },
          data: { position: { increment: 1 } }
        });
      }
    }

    // Move the task
    return tx.task.update({
      where: { id: taskId },
      data: { 
        columnId: dto.columnId, 
        position: dto.position 
      }
    });
  });
}

async remove(id: string, userId: string) {
    const task = await this.prisma.task.findUnique({ where: { id } });
    if (!task || task.deletedAt) throw new NotFoundException('Task not found');
    await this.verifyColumnAccess(task.columnId, userId);

    // Soft delete
    return this.prisma.task.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }

}

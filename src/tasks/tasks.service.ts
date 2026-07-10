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
    const task = await this.prisma.task.findUnique({ where: { id: taskId } });
    if (!task || task.deletedAt) throw new NotFoundException('Task not found');

    // Secure target and source boundaries
    await this.verifyColumnAccess(task.columnId, userId);
    if (task.columnId !== dto.columnId) {
      await this.verifyColumnAccess(dto.columnId, userId);
    }

    //ACID transaction
    return this.prisma.$transaction(async (tx) => {
      await tx.$executeRaw`
        SELECT id FROM "Task" 
        WHERE "columnId" = ${dto.columnId} AND "deletedAt" IS NULL 
        FOR UPDATE
      `;

      const isSameColumn = task.columnId === dto.columnId;

      if (isSameColumn) {
        // Shifting within the same column
        if (task.position < dto.position) {
          // Moving down: Shift intermediate tasks up
          await tx.task.updateMany({
            where: {
              columnId: task.columnId,
              position: { gt: task.position, lte: dto.position },
              deletedAt: null,
            },
            data: { position: { decrement: 1 } },
          });
        } else if (task.position > dto.position) {
          // Moving up: Shift intermediate tasks down
          await tx.task.updateMany({
            where: {
              columnId: task.columnId,
              position: { gte: dto.position, lt: task.position },
              deletedAt: null,
            },
            data: { position: { increment: 1 } },
          });
        }
      } else {
        // Moving to a completely different column
        // 1. Shrink gaps left behind in the source column
        await tx.task.updateMany({
          where: { columnId: task.columnId, position: { gt: task.position }, deletedAt: null },
          data: { position: { decrement: 1 } },
        });

        // 2. Make space inside the destination column
        await tx.task.updateMany({
          where: { columnId: dto.columnId, position: { gte: dto.position }, deletedAt: null },
          data: { position: { increment: 1 } },
        });
      }

      // moving the target task to its new absolute coordinates
      return tx.task.update({
        where: { id: taskId },
        data: { columnId: dto.columnId, position: dto.position },
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

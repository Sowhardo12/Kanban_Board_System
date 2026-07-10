import { Injectable , NotFoundException, ForbiddenException} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';


@Injectable()
export class ColumnsService {
  constructor(private prisma: PrismaService) {}

  private async verifyBoardOwner(boardId: string, userId: string) {
    const board = await this.prisma.board.findUnique({
      where: { id: boardId },
    });
    if (!board || board.deletedAt) throw new NotFoundException('Board not found');
    if (board.ownerId !== userId) throw new ForbiddenException('You do not own this board');
  }

  async create(boardId: string, dto: CreateColumnDto, userId: string) {
    await this.verifyBoardOwner(boardId, userId);

    return this.prisma.column.create({
      data: {
        title: dto.title,
        order: dto.order,
        boardId: boardId,
      },
    });
  }

  async update(id: string, dto: UpdateColumnDto, userId: string) {
    const column = await this.prisma.column.findUnique({
      where: { id },
    });
    if (!column) throw new NotFoundException('Column not found');

    await this.verifyBoardOwner(column.boardId, userId);

    return this.prisma.column.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string, userId: string) {
    const column = await this.prisma.column.findUnique({
      where: { id },
    });
    if (!column) throw new NotFoundException('Column not found');

    await this.verifyBoardOwner(column.boardId, userId);
    return this.prisma.column.delete({
      where: { id },
    });
  }
}
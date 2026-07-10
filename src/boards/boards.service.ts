import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateBoardDto } from './dto/create-board.dto';
@Injectable()
export class BoardsService {
  constructor(private prisma:PrismaService){}
  async create(dto:CreateBoardDto,userId:string){
    return this.prisma.board.create({
      data:{
        title:dto.title,
        ownerId:userId,
      },
    });
  }
  //implement findAllUserBoards here: 
  async findAllUserBoards(userId:string){
    return this.prisma.board.findMany({
      where:{
        ownerId:userId,
        deletedAt:null, //they areant soft deleted means legit boards
      }
    });
  }
  async findOne(id:string,userId:string){
    const board = await this.prisma.board.findFirst({
      where:{id,deletedAt:null},
      include:{
        columns:{
          orderBy:{
            order:'asc'
          },
          include:{
            tasks:{
              where:{deletedAt:null},
              orderBy:{position:'asc'}
            }
          }
        }
      }
    });
    if(!board) throw new NotFoundException('Board Not Found');
    //one user can't see another user's board/information
    if(board.ownerId!==userId)throw new ForbiddenException('Access Denied');
    return board;
  }
  async remove(id: string, userId: string) {
    const board = await this.prisma.board.findUnique({ where: { id } });
    
    if (!board || board.deletedAt) throw new NotFoundException('Board not found');
    if (board.ownerId !== userId) throw new ForbiddenException('You do not own this board');

    // Section 4 Requirement: Soft delete implementation
    return this.prisma.board.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}

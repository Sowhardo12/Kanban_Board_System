import { PrismaService } from "../../prisma/prisma.service";
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';
export declare class ColumnsService {
    private prisma;
    constructor(prisma: PrismaService);
    private verifyBoardOwner;
    create(boardId: string, dto: CreateColumnDto, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        order: number;
        boardId: string;
    }>;
    update(id: string, dto: UpdateColumnDto, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        order: number;
        boardId: string;
    }>;
    remove(id: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        order: number;
        boardId: string;
    }>;
}

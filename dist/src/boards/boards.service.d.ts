import { PrismaService } from "../../prisma/prisma.service";
import { CreateBoardDto } from './dto/create-board.dto';
export declare class BoardsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateBoardDto, userId: string): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        ownerId: string;
    }>;
    findAllUserBoards(userId: string): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        ownerId: string;
    }[]>;
    findOne(id: string, userId: string): Promise<{
        columns: ({
            tasks: {
                id: string;
                title: string;
                createdAt: Date;
                updatedAt: Date;
                deletedAt: Date | null;
                position: number;
                description: string | null;
                priority: string;
                dueDate: Date | null;
                assigneeId: string | null;
                columnId: string;
            }[];
        } & {
            id: string;
            title: string;
            createdAt: Date;
            updatedAt: Date;
            order: number;
            boardId: string;
        })[];
    } & {
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        ownerId: string;
    }>;
    remove(id: string, userId: string): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        ownerId: string;
    }>;
}

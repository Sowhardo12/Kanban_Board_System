import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
export declare class BoardsController {
    private readonly boardsService;
    constructor(boardsService: BoardsService);
    create(dto: CreateBoardDto, user: {
        id: string;
    }): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        ownerId: string;
    }>;
    findAll(user: {
        id: string;
    }): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        ownerId: string;
    }[]>;
    findOne(id: string, user: {
        id: string;
    }): Promise<{
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
    remove(id: string, user: {
        id: string;
    }): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        ownerId: string;
    }>;
}

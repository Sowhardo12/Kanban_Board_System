import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
export declare class BoardsController {
    private readonly boardsService;
    constructor(boardsService: BoardsService);
    create(dto: CreateBoardDto, user: {
        id: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        deletedAt: Date | null;
        ownerId: string;
    }>;
    findAll(user: {
        id: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        deletedAt: Date | null;
        ownerId: string;
    }[]>;
    findOne(id: string, user: {
        id: string;
    }): Promise<{
        columns: ({
            tasks: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                deletedAt: Date | null;
                position: number;
                description: string | null;
                priority: string;
                columnId: string;
                dueDate: Date | null;
                assigneeId: string | null;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            order: number;
            boardId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        deletedAt: Date | null;
        ownerId: string;
    }>;
    remove(id: string, user: {
        id: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        deletedAt: Date | null;
        ownerId: string;
    }>;
}

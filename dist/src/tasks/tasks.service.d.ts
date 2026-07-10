import { PrismaService } from "../../prisma/prisma.service";
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskPositionDto } from './dto/update-task-position.dto';
import { GetTasksFilterDto } from './dto/get-tasls-filter.dto';
export declare class TasksService {
    private prisma;
    constructor(prisma: PrismaService);
    private verifyColumnAccess;
    create(columnId: string, dto: CreateTaskDto, userId: string): Promise<{
        id: string;
        title: string;
        description: string | null;
        priority: string;
        dueDate: Date | null;
        position: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        assigneeId: string | null;
        columnId: string;
    }>;
    findAll(columnId: string, filters: GetTasksFilterDto, userId: string): Promise<{
        id: string;
        title: string;
        description: string | null;
        priority: string;
        dueDate: Date | null;
        position: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        assigneeId: string | null;
        columnId: string;
    }[]>;
    moveTaskPosition(taskId: string, dto: UpdateTaskPositionDto, userId: string): Promise<{
        id: string;
        title: string;
        description: string | null;
        priority: string;
        dueDate: Date | null;
        position: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        assigneeId: string | null;
        columnId: string;
    }>;
    remove(id: string, userId: string): Promise<{
        id: string;
        title: string;
        description: string | null;
        priority: string;
        dueDate: Date | null;
        position: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        assigneeId: string | null;
        columnId: string;
    }>;
}

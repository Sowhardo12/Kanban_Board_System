import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskPositionDto } from './dto/update-task-position.dto';
import { GetTasksFilterDto } from './dto/get-tasls-filter.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(columnId: string, dto: CreateTaskDto, user: {
        id: string;
    }): Promise<{
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
    findAll(columnId: string, filters: GetTasksFilterDto, user: {
        id: string;
    }): Promise<{
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
    movePosition(id: string, dto: UpdateTaskPositionDto, user: {
        id: string;
    }): Promise<{
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
    remove(id: string, user: {
        id: string;
    }): Promise<{
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

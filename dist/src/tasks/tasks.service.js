"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let TasksService = class TasksService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async verifyColumnAccess(columnId, userId) {
        const column = await this.prisma.column.findUnique({
            where: { id: columnId },
            include: { board: true },
        });
        if (!column || column.board.deletedAt)
            throw new common_1.NotFoundException('Column not found');
        if (column.board.ownerId !== userId)
            throw new common_1.ForbiddenException('Access Denied');
        return column;
    }
    async create(columnId, dto, userId) {
        await this.verifyColumnAccess(columnId, userId);
        return this.prisma.task.create({
            data: { ...dto, columnId },
        });
    }
    async findAll(columnId, filters, userId) {
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
    async moveTaskPosition(taskId, dto, userId) {
        const task = await this.prisma.task.findFirst({
            where: {
                id: taskId,
                column: { board: { ownerId: userId, deletedAt: null } }
            }
        });
        if (!task || task.deletedAt)
            throw new common_1.NotFoundException('Task not found');
        if (task.columnId !== dto.columnId) {
            const destColumn = await this.prisma.column.findFirst({
                where: { id: dto.columnId, board: { ownerId: userId, deletedAt: null } }
            });
            if (!destColumn)
                throw new common_1.ForbiddenException('Cannot move to this column');
        }
        return this.prisma.$transaction(async (tx) => {
            await tx.$executeRaw `
      SELECT id FROM "Task" 
      WHERE "columnId" = ${dto.columnId} AND "deletedAt" IS NULL 
      FOR UPDATE
    `;
            if (task.columnId !== dto.columnId) {
                await tx.task.updateMany({
                    where: {
                        columnId: task.columnId,
                        position: { gt: task.position },
                        deletedAt: null
                    },
                    data: { position: { decrement: 1 } }
                });
                await tx.task.updateMany({
                    where: {
                        columnId: dto.columnId,
                        position: { gte: dto.position },
                        deletedAt: null
                    },
                    data: { position: { increment: 1 } }
                });
            }
            else {
                if (task.position < dto.position) {
                    await tx.task.updateMany({
                        where: {
                            columnId: task.columnId,
                            position: { gt: task.position, lte: dto.position },
                            deletedAt: null,
                        },
                        data: { position: { decrement: 1 } }
                    });
                }
                else if (task.position > dto.position) {
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
            return tx.task.update({
                where: { id: taskId },
                data: {
                    columnId: dto.columnId,
                    position: dto.position
                }
            });
        });
    }
    async remove(id, userId) {
        const task = await this.prisma.task.findUnique({ where: { id } });
        if (!task || task.deletedAt)
            throw new common_1.NotFoundException('Task not found');
        await this.verifyColumnAccess(task.columnId, userId);
        return this.prisma.task.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TasksService);
//# sourceMappingURL=tasks.service.js.map
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
exports.ColumnsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ColumnsService = class ColumnsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async verifyBoardOwner(boardId, userId) {
        const board = await this.prisma.board.findUnique({
            where: { id: boardId },
        });
        if (!board || board.deletedAt)
            throw new common_1.NotFoundException('Board not found');
        if (board.ownerId !== userId)
            throw new common_1.ForbiddenException('You do not own this board');
    }
    async create(boardId, dto, userId) {
        await this.verifyBoardOwner(boardId, userId);
        return this.prisma.column.create({
            data: {
                title: dto.title,
                order: dto.order,
                boardId: boardId,
            },
        });
    }
    async update(id, dto, userId) {
        const column = await this.prisma.column.findUnique({
            where: { id },
        });
        if (!column)
            throw new common_1.NotFoundException('Column not found');
        await this.verifyBoardOwner(column.boardId, userId);
        return this.prisma.column.update({
            where: { id },
            data: dto,
        });
    }
    async remove(id, userId) {
        const column = await this.prisma.column.findUnique({
            where: { id },
        });
        if (!column)
            throw new common_1.NotFoundException('Column not found');
        await this.verifyBoardOwner(column.boardId, userId);
        return this.prisma.column.delete({
            where: { id },
        });
    }
};
exports.ColumnsService = ColumnsService;
exports.ColumnsService = ColumnsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ColumnsService);
//# sourceMappingURL=columns.service.js.map
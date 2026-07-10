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
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let BoardsService = class BoardsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto, userId) {
        return this.prisma.board.create({
            data: {
                title: dto.title,
                ownerId: userId,
            },
        });
    }
    async findAllUserBoards(userId) {
        return this.prisma.board.findMany({
            where: {
                ownerId: userId,
                deletedAt: null,
            }
        });
    }
    async findOne(id, userId) {
        const board = await this.prisma.board.findFirst({
            where: { id, deletedAt: null },
            include: {
                columns: {
                    orderBy: {
                        order: 'asc'
                    },
                    include: {
                        tasks: {
                            where: { deletedAt: null },
                            orderBy: { position: 'asc' }
                        }
                    }
                }
            }
        });
        if (!board)
            throw new common_1.NotFoundException('Board Not Found');
        if (board.ownerId !== userId)
            throw new common_1.ForbiddenException('Access Denied');
        return board;
    }
    async remove(id, userId) {
        const board = await this.prisma.board.findUnique({ where: { id } });
        if (!board || board.deletedAt)
            throw new common_1.NotFoundException('Board not found');
        if (board.ownerId !== userId)
            throw new common_1.ForbiddenException('You do not own this board');
        return this.prisma.board.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
    }
};
exports.BoardsService = BoardsService;
exports.BoardsService = BoardsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BoardsService);
//# sourceMappingURL=boards.service.js.map
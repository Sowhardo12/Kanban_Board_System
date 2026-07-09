import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()  // optional: makes it available everywhere without importing in every module
@Module({
  providers: [PrismaService],
  exports: [PrismaService],   // <-- this is the key part
})
export class PrismaModule {}
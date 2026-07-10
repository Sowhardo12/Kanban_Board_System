import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from 'prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { BoardsModule } from './boards/boards.module';
import { ColumnsModule } from './columns/columns.module';
import { TasksModule } from './tasks/tasks.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [ 
  ThrottlerModule.forRoot([{    //for rate limiting
      ttl: 60000,
      limit: 5,
    }]),  
  ConfigModule.forRoot({isGlobal:true,}) ,PrismaModule,AuthModule, BoardsModule, ColumnsModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

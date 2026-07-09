import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
// import { PrismaClient } from '@prisma/client/extension';
import { PrismaClient } from 'generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor(){
    console.log(process.env.DATABASE_URL);
    console.log("CAN U SEE ME BUDDY ?????")
    const pool = new Pool({connectionString: process.env.DATABASE_URL});
    const adapter = new PrismaPg(pool);
    super({adapter}); //need to know more here
  }
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
import 'dotenv/config';
import {defineConfig,env} from '@prisma/config';

export default defineConfig ({
  schema: './prisma/schema.prisma',
  datasource:{
    url:env('DATABASE_URL'), //connection string is in .env file
  },
});
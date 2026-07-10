import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableCors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  //input validation logic
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted:true,
      transform:true,
    })
  )
  //note: whitelist=true stripps down the unnecessary property 
  //and forbindNonWhitelisted=true actually sends an error as response
  
  const config = new DocumentBuilder()
  .setTitle('Kanban Board API Architecture')
  .setDescription('Kannaban system Backend API system with ACID transactional task ordering.')
  .setVersion('1.0')
  .addBearerAuth() 
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  console.log('server is listening on port 3000');
}
bootstrap();

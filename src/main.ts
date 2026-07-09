import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
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

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  console.log('server is listening on port 3000');
}
bootstrap();

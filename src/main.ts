import { MicroserviceOptions } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { microserviceConfig } from './config/microservice.config';
import { validateEnvVars } from '@config/config';

async function bootstrap() {
  validateEnvVars();

  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>(microserviceConfig);
  app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { RESSOURCEN_TRANSPORT } from '@app/core';

async function bootstrap() {
  /*const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );  
  app.connectMicroservice({
    transport: Transport.NATS,
    options: {
      url: 'nats://localhost:4222',
    },
  });

  await app.startAllMicroservicesAsync();
  await app.listen(3001);*/

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    RESSOURCEN_TRANSPORT,
  );
  app.listen(() => console.log('Microservice is listening'));
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AUFTRAGE } from '@app/core';

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
    AUFTRAGE,
  );
  app.listen(() => console.log('Microservice is listening'));
}
bootstrap();

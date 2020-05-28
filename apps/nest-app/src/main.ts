import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as helmet from 'helmet';
import * as compression from 'fastify-compress';

function registerSwagger(app) {
  const options = new DocumentBuilder()
    .setTitle('NestJS monorepo testing')
    .setDescription('description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);

}
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  app.useGlobalPipes(new ValidationPipe())
  app.use(helmet());
  app.register(compression, { encodings: ['gzip', 'deflate'] });
  registerSwagger(app);
  await app.listen(3000, '0.0.0.0');
}
bootstrap();

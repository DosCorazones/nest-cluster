import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { defaultDb } from '@app/core';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...defaultDb,
      database: 'auftraege'
    } as any),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

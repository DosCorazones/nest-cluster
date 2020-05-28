import { Module } from '@nestjs/common';
import { BenutzerModule } from './benutzer/index';
import { defaultDb } from '@app/core';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...defaultDb,
      database: 'ressourcen'
    } as any),
    BenutzerModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

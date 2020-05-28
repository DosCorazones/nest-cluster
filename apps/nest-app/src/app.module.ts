import { Module } from '@nestjs/common';
import { RessourcenController } from './api/ressourcen.controller';
import { AuftraegeController } from './api/auftraege.controller';

@Module({
  imports: [],
  controllers: [RessourcenController, AuftraegeController],
  providers: [],
})
export class AppModule {}

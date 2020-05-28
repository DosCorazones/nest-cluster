import { Module } from '@nestjs/common';
import { RessourcenController } from './ressourcen.controller';
import { AuftraegeController } from './auftraege.controller';

@Module({
  imports: [],
  controllers: [RessourcenController, AuftraegeController],
  providers: [],
})
export class AppModule {}

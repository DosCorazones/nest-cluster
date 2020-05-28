import { Module } from '@nestjs/common';
import { BenutzerController } from './benutzer.controller';
import { BenutzerService } from './benutzer.service';

@Module({
  imports: [],
  controllers: [BenutzerController],
  providers: [BenutzerService],
})
export class BenutzerModule {}

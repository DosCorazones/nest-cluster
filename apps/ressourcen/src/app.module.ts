import { Module } from '@nestjs/common';
import { BenutzerModule } from './benutzer/index';

@Module({
  imports: [BenutzerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

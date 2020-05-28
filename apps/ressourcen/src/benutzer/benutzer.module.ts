import { Module } from '@nestjs/common';
import { BenutzerController } from './benutzer.controller';
import { BenutzerService } from './benutzer.service';
import { BenutzerEntity } from './benutzer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([BenutzerEntity])],
    controllers: [BenutzerController],
    providers: [BenutzerService],
})
export class BenutzerModule { }

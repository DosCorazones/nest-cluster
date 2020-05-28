import { Injectable } from "@nestjs/common";
import { BenutzerEntity } from "./benutzer.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { BenutzerDto } from "@app/views";

@Injectable()
export class BenutzerService {
    constructor(@InjectRepository(BenutzerEntity) private readonly benutzerRepository: Repository<BenutzerEntity>) {}

    
  async create(userData: BenutzerDto) {
    const user = new BenutzerEntity();
    Object.assign(user, userData);
    return await this.benutzerRepository.save(user);
  }

  async getUser(id: string) {
    return await this.benutzerRepository.findOne(id);
  }

  async getAllUsers() {
    return await this.benutzerRepository.find();
  }

  async update(userData: BenutzerDto) {
    const user = new BenutzerEntity();
    Object.assign(user, userData);
    return await this.benutzerRepository.save(user);
  }
}
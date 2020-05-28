import { MessagePattern } from "@nestjs/microservices";
import { Controller } from "@nestjs/common";
import { BenutzerDto } from "@app/views";
import { BenutzerService } from "./benutzer.service";

@Controller()
export class BenutzerController {

  constructor(private benutzerService: BenutzerService){}

  @MessagePattern('getHello')
  accumulate(data: string): string {
    return `hello ${data}`;
  }

  @MessagePattern('benutzer.create')
  async createBenutzer(data: BenutzerDto): Promise<BenutzerDto> {
    return await this.benutzerService.create(data);
  }
  @MessagePattern('benutzer.list')
  async listBenutzer() {
    return await this.benutzerService.getAllUsers();
  }
}
import { MessagePattern } from "@nestjs/microservices";
import { Controller } from "@nestjs/common";

@Controller()
export class BenutzerController {

  @MessagePattern('getHello')
  accumulate(data: string): string {
    return `hello ${data}`;
  }
}
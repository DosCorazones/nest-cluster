import { Controller, Get } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        port: 4000,
      },
    });
  }

  @Get()
  getHello() {
    return this.client.send<string, string>('getHello', 'Michael').toPromise();
  }
}

import { Controller, Get } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { RESSOURCEN_TRANSPORT } from '@app/core';

@ApiTags('ressourcen')
@Controller({path: 'ressourcen'})
export class RessourcenController {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create(RESSOURCEN_TRANSPORT);
  }

  @Get()
  getHello() {
    return this.client.send<string, string>('getHello', 'Michael').toPromise();
  }
}

import { Controller, Get } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { AUFTRAGE_TRANSPORT } from '@app/core';

@ApiTags('auftraege')
@Controller({path:'auftraege'})
export class AuftraegeController {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create(AUFTRAGE_TRANSPORT);
  }

  @Get()
  getHello() {
    return this.client.send<string, string>('getHello', 'Michael').toPromise();
  }
}

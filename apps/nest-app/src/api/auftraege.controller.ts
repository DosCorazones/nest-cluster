import { Controller, Get } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy, Client } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { AUFTRAGE_TRANSPORT } from '@app/core';

@ApiTags('auftraege')
@Controller({path:'auftraege'})
export class AuftraegeController {
  @Client(AUFTRAGE_TRANSPORT)
  private client: ClientProxy;

  @Get()
  getHello() {
    return this.client.send<string, string>('getHello', 'Michael').toPromise();
  }
}

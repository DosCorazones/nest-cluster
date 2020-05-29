import { Controller, Get, Post, Body } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy, Client } from '@nestjs/microservices';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { RESSOURCEN_TRANSPORT } from '@app/core';
import { BenutzerDto } from '@app/views';

@ApiTags('ressourcen')
@Controller({path: 'ressourcen'})
export class RessourcenController {
  @Client(RESSOURCEN_TRANSPORT)
  private client: ClientProxy;


  @Get()
  getHello() {
    return this.client.send<string, string>('getHello', 'Michael').toPromise();
  }

  @Post('benutzer')
  postBenutzer(@Body() createBenutzer: BenutzerDto) {
    return this.client.send<BenutzerDto,BenutzerDto>('benutzer.create', createBenutzer).toPromise();

  }
  @Get('benutzer')
  getBenutzerList() {
    return this.client.send('benutzer.list', {}).toPromise();
  }
}

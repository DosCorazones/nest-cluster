import { Transport, ClientOptions } from "@nestjs/microservices";

export const RESSOURCEN_TRANSPORT: ClientOptions = {
  transport: Transport.TCP,
  options: {
    host: 'ressourcen',
    port: 4000,
  },
}

export const AUFTRAGE_TRANSPORT: ClientOptions = {
  transport: Transport.TCP,
  options: {
    host: 'auftraege',
    port: 4001,
  },
}
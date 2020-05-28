import { Transport, ClientOptions } from "@nestjs/microservices";

export const RESSOURCEN_TRANSPORT: ClientOptions = {
  transport: Transport.TCP,
  options: {
    port: 4000,
  },
}

export const AUFTRAGE_TRANSPORT: ClientOptions = {
  transport: Transport.TCP,
  options: {
    port: 4001,
  },
}
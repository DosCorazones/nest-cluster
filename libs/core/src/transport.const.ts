import { Transport, ClientOptions } from "@nestjs/microservices";

export const RESSOURCEN: ClientOptions = {
    transport: Transport.TCP,
    options: {
      port: 4000,
    },
  }

export const AUFTRAGE: ClientOptions = {
    transport: Transport.TCP,
    options: {
        port: 4001,
    },
}
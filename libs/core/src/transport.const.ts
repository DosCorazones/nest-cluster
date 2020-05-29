import { Transport, NatsOptions } from "@nestjs/microservices";

export const RESSOURCEN_TRANSPORT: NatsOptions = {
  transport: Transport.NATS,
  options: {
    name: 'ressourcen',
    url: 'nats://nats:4222'
  },
}

export const AUFTRAGE_TRANSPORT: NatsOptions = {
  transport: Transport.NATS,
  options: {
    name: 'auftraege',
    url: 'nats://nats:4222'
  },
}
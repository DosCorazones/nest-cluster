import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const defaultDb: TypeOrmModuleOptions = {
    type: "mysql",
    host: "db",
    port: 3306,
    username: "root",
    password: "microstuff",
    entities: [],
    synchronize: true,
    autoLoadEntities: true,
}
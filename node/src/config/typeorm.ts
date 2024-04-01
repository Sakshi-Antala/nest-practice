import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';

ConfigModule.forRoot();
export const typeOrmConfig = (): DataSourceOptions => {
  return {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [join(__dirname, '..', '**', 'entities/*.{ts,js}')],
    // synchronize: true,
  };
};

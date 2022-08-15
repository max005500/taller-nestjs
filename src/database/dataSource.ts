import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';

config();
const configService = new ConfigService();

export default new DataSource({
  type: 'cockroachdb',
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASS'),
  database: configService.get('DB_NAME'),
  port: configService.get('DB_PORT'),
  host: configService.get('DB_HOST'),
  extra: {
    options: `--cluster=${configService.get('DB_ID')}`,
  },
  ssl: true,
  synchronize: false,
  logging: true,
  entities: ['src/*/*/*.entity.ts'],
  migrations: ['src/database/migrations/*.ts'],
});

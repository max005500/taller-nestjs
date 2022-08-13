import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigType<typeof config>) => {
        return {
          ...configService.database,
          type: 'cockroachdb',
          synchronize: false,
          autoLoadEntities: true,
          ssl: true,
        };
      },
      inject: [config.KEY],
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}

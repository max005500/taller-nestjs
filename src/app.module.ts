import { HttpModule, HttpService } from '@nestjs/axios';
import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BuildingSiteModule } from './building-site/building-site.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import * as Joi from 'joi';
import config from './config';

@Module({
  imports: [
    BuildingSiteModule,
    HttpModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        DB_HOST: Joi.string().hostname().required() ?? 'http://localhost/',
        DB_PORT: Joi.number().port() ?? 3000,
        DB_USER: Joi.string().required(),
        DB_PASS: Joi.string().required(),
        DB_NAME: Joi.string().required(),
      }),
    }),
    DatabaseModule,
    UserModule,
  ],
  providers: [],
  exports: [],
})
export class AppModule {}

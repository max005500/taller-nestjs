import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { LocalStrageyPassport } from './strategies/local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import config from '../config';
import { ConfigType } from '@nestjs/config';
import { JwtStrageyPassport } from './strategies/jwt.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigType<typeof config>) => {
        return {
          secret: configService.jwtKey,
          signOptions: { expiresIn: '10d' },
        };
      },
      inject: [config.KEY],
    }),
  ],
  providers: [AuthService, LocalStrageyPassport, JwtStrageyPassport],
  controllers: [AuthController],
})
export class AuthModule {}

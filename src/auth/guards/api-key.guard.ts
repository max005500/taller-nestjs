import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { Observable } from 'rxjs';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';

import { API_PUBLIC_KEY } from '../decorators/public.decorator';
import config from '../../config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.get(API_PUBLIC_KEY, context.getHandler());

    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();
    const apiHeader = request.header('auth');

    const validation = apiHeader === this.configService.apiKey;
    if (!validation) throw new UnauthorizedException('no autorizado');

    return validation;
  }
}

import { Module } from '@nestjs/common';
import { BuildingSiteService } from './building-site.service';
import { BuildingSiteController } from './building-site.controller';

@Module({
  providers: [BuildingSiteService],
  controllers: [BuildingSiteController],
})
export class BuildingSiteModule {}

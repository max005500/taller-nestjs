import { Module } from '@nestjs/common';
import { BuildingSiteController } from './building-site.controller';
import { BuildingSiteService } from './building-site.service';

@Module({
  imports: [],
  providers: [BuildingSiteService],
  controllers: [BuildingSiteController],
})
export class BuildingSiteModule {}

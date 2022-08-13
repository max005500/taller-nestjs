import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuildingSiteController } from './building-site.controller';
import { BuildingSiteService } from './building-site.service';
import { BuildingSite } from './entities/building-site.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BuildingSite])],
  providers: [BuildingSiteService],
  controllers: [BuildingSiteController],
})
export class BuildingSiteModule {}

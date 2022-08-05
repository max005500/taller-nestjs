import { Module } from '@nestjs/common';
import { BuildingSiteModule } from './building-site/building-site.module';

@Module({
  imports: [BuildingSiteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { BuildingSiteService } from './building-site.service';

// FIX:

@Controller('building-site')
export class BuildingSiteController {
  constructor(private readonly buildingSiteService: BuildingSiteService) {}

  @Get()
  getAll() {
    return this.buildingSiteService.findAll();
  }
  @Get(':id')

  // WARN: el parametro no resibe un string
  getById(@Param('id') id: number) {
    return this.buildingSiteService.findOne(id);
  }
  // @Put(':id')
  // update(){}
}

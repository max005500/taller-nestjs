import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from '../config';

import { BuildingSiteService } from './building-site.service';

@Controller('building-site')
export class BuildingSiteController {
  constructor(
    @Inject(config.KEY)
    private readonly confgiService: ConfigType<typeof config>,
    private readonly buildingSiteService: BuildingSiteService,
  ) {}

  @Get('mensaje')
  getMensaje() {
    return {
      message: this.confgiService.apiKey,
    };
  }
  @Get('aves')
  getAves() {
    // return this.aves.data;
  }
  @Get()
  getAll() {
    return this.buildingSiteService.findAll();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.buildingSiteService.findOne(id);
  }
  @Put(':id')
  updateById(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {
    return this.buildingSiteService.update(id, payload);
  }
  @Delete(':id')
  deleteById(@Param('id') id: number) {
    return this.buildingSiteService.delete(id);
  }
}

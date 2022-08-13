import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { BuildingSiteService } from './building-site.service';
import {
  CreateBuildingStDto,
  UpdateBuildingStDto,
} from './dtos/building-site.dto';

@Controller('building-site')
export class BuildingSiteController {
  constructor(private readonly buildingSiteService: BuildingSiteService) {}

  @Get()
  getAll() {
    return this.buildingSiteService.findAll();
  }
  @Get(':id')
  getById(@Param('id', ParseUUIDPipe) id: string) {
    return this.buildingSiteService.findOne(id);
  }
  @Post()
  create(@Body() payload: CreateBuildingStDto) {
    return this.buildingSiteService.create(payload);
  }

  @Put(':id')
  updateById(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() payload: UpdateBuildingStDto,
  ) {
    return this.buildingSiteService.update(id, payload);
  }
  @Delete(':id')
  deleteById(@Param('id', ParseUUIDPipe) id: string) {
    return this.buildingSiteService.delete(id);
  }
}

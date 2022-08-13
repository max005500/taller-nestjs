import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import {
  CreateBuildingStDto,
  UpdateBuildingStDto,
} from './dtos/building-site.dto';

import { BuildingSite } from './entities/building-site.entity';

@Injectable()
export class BuildingSiteService {
  constructor(
    @InjectRepository(BuildingSite) private buildRepo: Repository<BuildingSite>,
  ) {}

  async findAll() {
    return await this.buildRepo.find();
  }

  async findOne(id: string) {
    const buildSt = await this.buildRepo.findOneBy({ id: id });
    if (!buildSt) throw new NotFoundException(`build with id: ${id} not exist`);

    return buildSt;
  }

  async create(payload: CreateBuildingStDto) {
    try {
      const buildSt = this.buildRepo.create(payload);
      await this.buildRepo.save(buildSt);
      return buildSt;
    } catch (err) {
      console.error(err);
      throw new InternalServerErrorException(
        'ocurrio un error mira la terminal para mas informacion',
      );
    }
  }

  async update(id: string, payload: UpdateBuildingStDto) {
    try {
      const buildSt = this.buildRepo.preload({ ...payload });

      // await this.buildRepo.save(buildSt);
      return buildSt;
    } catch (err) {
      console.error(err);
      throw new InternalServerErrorException(
        'ocurrio un error mira la terminal para mas informacion',
      );
    }
  }

  async delete(id: string) {
    const buildSt = await this.findOne(id);
    await this.buildRepo.remove(buildSt);
    return { message: 'objeto borrado exitosamente' };
  }
}

import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = this.userRepo.create(createUserDto);
      const hashPass = await bcrypt.hash(user.password, 10);
      user.password = hashPass;

      await this.userRepo.save(user);
      return user;
    } catch (err) {
      console.error(err);
      throw new InternalServerErrorException(
        'ocurrio un error mira la terminal para mas informacion',
      );
    }
  }

  async findAll() {
    return await this.userRepo.find();
  }

  async findOne(id: string) {
    const userSt = await this.userRepo.findOneBy({ id: id });
    if (!userSt) throw new NotFoundException(`user with id: ${id} not exist`);

    return userSt;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const userSt = await this.userRepo.preload({ id: id, ...updateUserDto });
      if (!userSt) throw new NotFoundException(`user with id: ${id} not exist`);
      await this.userRepo.save(userSt);

      return userSt;
    } catch (err) {
      console.error(err.data);
      throw new InternalServerErrorException(
        'ocurrio un error mira la terminal para mas informacion',
      );
    }
  }

  async remove(id: string) {
    const userSt = await this.findOne(id);
    await this.userRepo.remove(userSt);
    return { message: 'objeto borrado exitosamente' };
  }
}

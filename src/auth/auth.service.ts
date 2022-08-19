import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { jwtPayload } from './models/jwt-generate.model';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findOneByEmail(email);

    if (user) {
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid) {
        return user;
      }
    }
    return null;
  }
  generateJwt(user: User) {
    const payload: jwtPayload = { role: user.role, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}

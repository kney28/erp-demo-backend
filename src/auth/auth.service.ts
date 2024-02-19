/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PermissionssService } from 'src/configuration/permissionss/permissionss.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private permissionssService: PermissionssService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    const passwordHashed = user ? await bcrypt.hash(password, user.salt) : null;
    if (user && user.password === passwordHashed && user.active) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const permissions = (await this.permissionssService.findAll()).filter(function(n){
      return n.profile.code == user.role.code;
    });
    const payload = { username: user.username, id: user.id, role: user.role, permissions: permissions };
    return {
      usuario: {
        name: user.name,
        role: user.role,
        permissions
      },
      access_token: this.jwtService.sign(payload),
      message: '',
      statusCode: 201
    };
  }
}

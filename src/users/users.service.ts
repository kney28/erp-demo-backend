/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOneById(id: string): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  async findOneByUsername(username: string): Promise<User> {
    return this.usersRepository.findOneBy({ username });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user: User = this.usersRepository.create(updateUserDto);
    const editedUser: User = await this.usersRepository.findOneBy({ id });
    editedUser.name = user.name;
    editedUser.username = user.username;
    editedUser.role = user.role;
    editedUser.active = user.active;
    
    if (user.password && user.password != null) {
      const salt = await bcrypt.genSalt();
      editedUser.password = await bcrypt.hash(user.password, salt);
      editedUser.salt = salt;
    }
    // const editedUser: User = Object.assign(user, updateUserDto);
    return await this.usersRepository.save(editedUser);
  }

  async remove(id: string): Promise<User> {
    const user: User = await this.usersRepository.findOneBy({ id });
    return await this.usersRepository.softRemove(user);
  }
}

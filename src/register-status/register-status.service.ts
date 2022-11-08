import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRegisterStatusDto } from './dto/create-register-status.dto';
import { UpdateRegisterStatusDto } from './dto/update-register-status.dto';
import { RegisterStatus } from './entities/register-status.entity';

@Injectable()
export class RegisterStatusService {
  constructor(
    @InjectRepository(RegisterStatus)
    private RegisterStatusRepository: Repository<RegisterStatus>,
  ) {}

  async create(
    createRegisterStatusDto: CreateRegisterStatusDto,
  ): Promise<RegisterStatus> {
    const registerStatus: RegisterStatus = this.RegisterStatusRepository.create(
      createRegisterStatusDto,
    );
    return await this.RegisterStatusRepository.save(registerStatus);
  }

  findAll(): Promise<RegisterStatus[]> {
    return this.RegisterStatusRepository.find();
  }

  findOneById(id: string): Promise<RegisterStatus> {
    return this.RegisterStatusRepository.findOneBy({ id });
  }

  findOneByName(name: string): Promise<RegisterStatus> {
    return this.RegisterStatusRepository.findOneBy({ name });
  }

  async update(
    id: string,
    updateRegisterStatusDto: UpdateRegisterStatusDto,
  ): Promise<RegisterStatus> {
    const registerStatus: RegisterStatus =
      await this.RegisterStatusRepository.findOneBy({ id });
    const editedregister: RegisterStatus = Object.assign(
      registerStatus,
      updateRegisterStatusDto,
    );
    return await this.RegisterStatusRepository.save(editedregister);
  }

  async remove(id: string): Promise<RegisterStatus> {
    const registerStatus: RegisterStatus =
      await this.RegisterStatusRepository.findOneBy({ id });
    return await this.RegisterStatusRepository.softRemove(registerStatus);
  }
}

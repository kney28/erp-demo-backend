import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHealthAdministratorDto } from './dto/create-healthadministrator.dto';
import { UpdateHealthAdministratorDto } from './dto/update-healthadministrator.dto';
import { HealthAdministrator } from './entities/healthadministrator.entity';

@Injectable()
export class HealthAdministratorsService {
  constructor(
    @InjectRepository(HealthAdministrator)
    private healthadministratorsRepository: Repository<HealthAdministrator>,
  ) {}

  async create(
    createHealthAdministratorDto: CreateHealthAdministratorDto,
  ): Promise<HealthAdministrator> {
    const healthadministrator: HealthAdministrator =
      this.healthadministratorsRepository.create(createHealthAdministratorDto);
    return await this.healthadministratorsRepository.save(healthadministrator);
  }

  findAll(): Promise<HealthAdministrator[]> {
    return this.healthadministratorsRepository.find();
  }

  findOne(id: string): Promise<HealthAdministrator> {
    return this.healthadministratorsRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateHealthAdministratorDto: UpdateHealthAdministratorDto,
  ): Promise<HealthAdministrator> {
    const healthadministrator: HealthAdministrator =
      await this.healthadministratorsRepository.findOneBy({ id });
    const editedHealthAdministrator: HealthAdministrator = Object.assign(
      healthadministrator,
      updateHealthAdministratorDto,
    );
    return await this.healthadministratorsRepository.save(
      editedHealthAdministrator,
    );
  }

  async remove(id: string): Promise<HealthAdministrator> {
    const healthadministrator: HealthAdministrator =
      await this.healthadministratorsRepository.findOneBy({ id });
    return await this.healthadministratorsRepository.softRemove(
      healthadministrator,
    );
  }
}

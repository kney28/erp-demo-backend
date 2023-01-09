import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHealthProviderDto } from './dto/create-healthprovider.dto';
import { UpdateHealthProviderDto } from './dto/update-healthprovider.dto';
import { HealthProvider } from './entities/healthprovider.entity';

@Injectable()
export class HealthProvidersService {
  constructor(
    @InjectRepository(HealthProvider)
    private healthproviderRepository: Repository<HealthProvider>,
  ) {}

  async create(
    createHealthProviderDto: CreateHealthProviderDto,
  ): Promise<HealthProvider> {
    const healthprovider: HealthProvider = this.healthproviderRepository.create(
      createHealthProviderDto,
    );
    return await this.healthproviderRepository.save(healthprovider);
  }

  findAll(): Promise<HealthProvider[]> {
    return this.healthproviderRepository.find();
  }

  findOne(id: string) {
    return this.healthproviderRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateHealthProviderDto: UpdateHealthProviderDto,
  ): Promise<HealthProvider> {
    const healthProvider: HealthProvider =
      await this.healthproviderRepository.findOneBy({ id });
    const editedHealthProvider: HealthProvider = Object.assign(
      healthProvider,
      updateHealthProviderDto,
    );
    return await this.healthproviderRepository.save(editedHealthProvider);
  }

  async remove(id: string): Promise<HealthProvider> {
    const healthprovider: HealthProvider =
      await this.healthproviderRepository.findOneBy({ id });
    return await this.healthproviderRepository.softRemove(healthprovider);
  }
}

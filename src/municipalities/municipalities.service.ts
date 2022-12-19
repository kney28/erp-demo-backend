import { Injectable } from '@nestjs/common';
import { CreateMunicipalityDto } from './dto/create-municipality.dto';
import { UpdateMunicipalityDto } from './dto/update-municipality.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Municipality } from './entities/municipality.entity';
@Injectable()
export class MunicipalitiesService {
  constructor(
    @InjectRepository(Municipality)
    private municipalitiesRepository: Repository<Municipality>,
  ) {}

  async create(
    createMunicipalityDto: CreateMunicipalityDto,
  ): Promise<Municipality> {
    const municipality: Municipality = this.municipalitiesRepository.create(
      createMunicipalityDto,
    );
    return this.municipalitiesRepository.save(municipality);
  }

  async findAll(): Promise<Municipality[]> {
    const municipalities = await this.municipalitiesRepository
      .createQueryBuilder('municipality')
      .leftJoinAndSelect('municipality.department', 'department')
      .getMany();
    return municipalities;
  }

  async findOne(id: string): Promise<Municipality> {
    const municipalities = await this.municipalitiesRepository
      .createQueryBuilder('municipality')
      .leftJoinAndSelect('municipality.department', 'department')
      .where('municipality.id = :id', { id: id })
      .getOne();
    return municipalities;
  }

  async update(
    id: string,
    updateMunicipalityDto: UpdateMunicipalityDto,
  ): Promise<Municipality> {
    const municipality: Municipality =
      await this.municipalitiesRepository.findOneBy({
        id,
      });
    const editedMunicipality: Municipality = Object.assign(
      municipality,
      updateMunicipalityDto,
    );
    return this.municipalitiesRepository.save(editedMunicipality);
  }

  async remove(id: string): Promise<Municipality> {
    const municipality: Municipality =
      await this.municipalitiesRepository.findOneBy({
        id,
      });
    return this.municipalitiesRepository.softRemove(municipality);
  }
}

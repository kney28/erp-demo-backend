import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Location } from './entities/location.entity';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
  ) {}

  create(createLocationDto: CreateLocationDto): Promise<Location> {
    const location: Location =
      this.locationRepository.create(createLocationDto);
    return this.locationRepository.save(location);
  }

  findAll(): Promise<Location[]> {
    return this.locationRepository.find();
  }

  findOne(id: string): Promise<Location> {
    return this.locationRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateLocationDto: UpdateLocationDto,
  ): Promise<Location> {
    const location: Location = await this.locationRepository.findOneBy({
      id,
    });

    const editedLocation: Location = Object.assign(location, updateLocationDto);

    return this.locationRepository.save(editedLocation);
  }

  async remove(id: string): Promise<Location> {
    const location: Location = await this.locationRepository.findOneBy({
      id,
    });
    return this.locationRepository.softRemove(location);
  }
}

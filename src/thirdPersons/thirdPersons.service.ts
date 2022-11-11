import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateThirdPersonDto } from './dto/create-thirdPerson.dto';
import { UpdateThirdPersonDto } from './dto/update-thirdPerson.dto';
import { ThirdPerson } from './entities/thirdPersonEntity';

@Injectable()
export class ThirdPersonsService {
  constructor(
    @InjectRepository(ThirdPerson)
    private thirpersonsRepository: Repository<ThirdPerson>,
  ) {}

  async create(
    createThirdPersonDto: CreateThirdPersonDto,
  ): Promise<ThirdPerson> {
    const thirdPerson: ThirdPerson =
      this.thirpersonsRepository.create(createThirdPersonDto);
    return await this.thirpersonsRepository.save(thirdPerson);
  }

  findAll(): Promise<ThirdPerson[]> {
    return this.thirpersonsRepository.find();
  }

  findOneById(id: string): Promise<ThirdPerson> {
    return this.thirpersonsRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateThirdPersonDto: UpdateThirdPersonDto,
  ): Promise<ThirdPerson> {
    const thirdPerson: ThirdPerson = await this.thirpersonsRepository.findOneBy(
      { id },
    );
    const editedThirdPerson: ThirdPerson = Object.assign(
      thirdPerson,
      updateThirdPersonDto,
    );
    return await this.thirpersonsRepository.save(editedThirdPerson);
  }

  async remove(id: string): Promise<ThirdPerson> {
    const thirdPerson: ThirdPerson = await this.thirpersonsRepository.findOneBy(
      { id },
    );
    return await this.thirpersonsRepository.softRemove(thirdPerson);
  }
}

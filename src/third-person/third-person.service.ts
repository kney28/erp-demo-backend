import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateThirdPersonDto } from './dto/create-third-person.dto';
import { UpdateThirdPersonDto } from './dto/update-third-person.dto';
import { ThirdPerson } from './entities/third-person.entity';

@Injectable()
export class ThirdPersonService {
  constructor(
    @InjectRepository(ThirdPerson)
    private thirdpersonRepository: Repository<ThirdPerson>,
  ) {}

  async create(
    createThirdPersonDto: CreateThirdPersonDto,
  ): Promise<ThirdPerson> {
    const thirdperson: ThirdPerson =
      this.thirdpersonRepository.create(createThirdPersonDto);
    return await this.thirdpersonRepository.save(thirdperson);
  }

  findAll(): Promise<ThirdPerson[]> {
    return this.thirdpersonRepository.find();
  }

  findOne(id: string): Promise<ThirdPerson> {
    return this.thirdpersonRepository.findOneBy({ id });
  }

  findOneById(id: string): Promise<ThirdPerson> {
    return this.thirdpersonRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateThirdPersonDto: UpdateThirdPersonDto,
  ): Promise<ThirdPerson> {
    const thirdperson: ThirdPerson = await this.thirdpersonRepository.findOneBy(
      { id },
    );
    const editedThirPerson: ThirdPerson = Object.assign(
      thirdperson,
      updateThirdPersonDto,
    );
    return await this.thirdpersonRepository.save(editedThirPerson);
  }

  async remove(id: string): Promise<ThirdPerson> {
    const thirdperson: ThirdPerson = await this.thirdpersonRepository.findOneBy(
      { id },
    );
    return await this.thirdpersonRepository.softRemove(thirdperson);
  }
}

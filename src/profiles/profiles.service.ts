import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile)
    private profilesRepository: Repository<Profile>,
  ) {}

  async create(createProfileDto: CreateProfileDto): Promise<Profile> {
    const profile: Profile = this.profilesRepository.create(createProfileDto);
    return await this.profilesRepository.save(profile);
  }

  findAll(): Promise<Profile[]> {
    return this.profilesRepository.find();
  }

  findOne(id: string): Promise<Profile> {
    return this.profilesRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateProfileDto: UpdateProfileDto,
  ): Promise<Profile> {
    const profile: Profile = await this.profilesRepository.findOneBy({
      id,
    });
    const editedProfile: Profile = Object.assign(profile, updateProfileDto);
    return await this.profilesRepository.save(editedProfile);
  }

  async remove(id: string): Promise<Profile> {
    const profile: Profile = await this.profilesRepository.findOneBy({
      id,
    });
    return await this.profilesRepository.softRemove(profile);
  }
}

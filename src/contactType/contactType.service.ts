import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContactTypeDto } from './dto/create-contactType.dto';
import { UpdateContactTypeDto } from './dto/update-contactType.dto';
import { ContactType } from './entities/contactType.entity';

@Injectable()
export class ContactTypeService {
  constructor(
    @InjectRepository(ContactType)
    private ContactTypeRepository: Repository<ContactType>,
  ) {}

  async create(
    createContactTypeDto: CreateContactTypeDto,
  ): Promise<ContactType> {
    const ContactType: ContactType =
      this.ContactTypeRepository.create(createContactTypeDto);
    return await this.ContactTypeRepository.save(ContactType);
  }

  findAll(): Promise<ContactType[]> {
    return this.ContactTypeRepository.find();
  }

  findOne(id: string): Promise<ContactType> {
    return this.ContactTypeRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateContactTypeDto: UpdateContactTypeDto,
  ): Promise<ContactType> {
    const contactType: ContactType = await this.ContactTypeRepository.findOneBy(
      { id },
    );
    const editedContactType: ContactType = Object.assign(
      contactType,
      updateContactTypeDto,
    );
    return await this.ContactTypeRepository.save(editedContactType);
  }

  async remove(id: string): Promise<ContactType> {
    const contactType: ContactType = await this.ContactTypeRepository.findOneBy(
      { id },
    );
    return await this.ContactTypeRepository.softRemove(contactType);
  }
}

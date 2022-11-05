import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContactTypeDto } from './dto/create-contact-type.dto';
import { UpdateContactTypeDto } from './dto/update-contact-type.dto';
import { ContactType } from './entities/contact-type.entity';

@Injectable()
export class ContactTypeService {
  constructor(
    @InjectRepository(ContactType)
    private ContactTypeRepository: Repository<ContactType>,
  ) {}

  async create(createContactTypeDto: CreateContactTypeDto) {
    const ContactType: ContactType =
      this.ContactTypeRepository.create(createContactTypeDto);
    return await this.ContactTypeRepository.save(ContactType);
  }

  findAll() {
    return this.ContactTypeRepository.find();
  }

  findOne(id: string) {
    return this.ContactTypeRepository.findOneBy({ id });
  }

  async update(id: string, updateContactTypeDto: UpdateContactTypeDto) {
    const contactType: ContactType = await this.ContactTypeRepository.findOneBy(
      { id },
    );
    const editedContactType: ContactType = Object.assign(
      contactType,
      updateContactTypeDto,
    );
    return await this.ContactTypeRepository.save(editedContactType);
  }

  async remove(id: string) {
    const contactType: ContactType = await this.ContactTypeRepository.findOneBy(
      { id },
    );
    return await this.ContactTypeRepository.softRemove(contactType);
  }
}

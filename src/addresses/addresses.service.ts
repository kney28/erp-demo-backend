import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}

  async create(createAddressDto: CreateAddressDto): Promise<Address> {
    const address: Address = this.addressRepository.create(createAddressDto);
    return await this.addressRepository.save(address);
  }

  findAll(): Promise<Address[]> {
    return this.addressRepository.find();
  }

  findOne(id: string): Promise<Address> {
    return this.addressRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateAddressDto: UpdateAddressDto,
  ): Promise<Address> {
    const address: Address = await this.addressRepository.findOneBy({ id });
    const editedAddress: Address = Object.assign(address, updateAddressDto);
    return await this.addressRepository.save(editedAddress);
  }

  async remove(id: string): Promise<Address> {
    const address: Address = await this.addressRepository.findOneBy({ id });
    return await this.addressRepository.softRemove(address);
  }
}

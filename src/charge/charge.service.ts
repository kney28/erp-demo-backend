import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChargeDto } from './dto/create-charge.dto';
import { UpdateChargeDto } from './dto/update-charge.dto';
import { Charge } from './entities/charge.entity';

@Injectable()
export class ChargeService {
  constructor(
    @InjectRepository(Charge)
    private chargerepository: Repository<Charge>,
  ) {}

  async create(createChargeDto: CreateChargeDto): Promise<Charge> {
    const charge: Charge = this.chargerepository.create(createChargeDto);
    return await this.chargerepository.save(charge);
  }

  findAll(): Promise<Charge[]> {
    return this.chargerepository.find();
  }

  findOne(id: string): Promise<Charge> {
    return this.chargerepository.findOneBy({ id });
  }

  async update(id: string, updateChargeDto: UpdateChargeDto): Promise<Charge> {
    const charge: Charge = await this.chargerepository.findOneBy({ id });
    const editedCharge: Charge = Object.assign(charge, updateChargeDto);
    return await this.chargerepository.save(editedCharge);
  }

  async remove(id: string): Promise<Charge> {
    const charge: Charge = await this.chargerepository.findOneBy({ id });
    return await this.chargerepository.softRemove(charge);
  }
}

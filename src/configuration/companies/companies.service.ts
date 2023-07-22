import { Injectable, PipeTransform, ArgumentMetadata } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';
import { Observable } from 'rxjs';

@Injectable()
export class CompaniesService implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // "value" is an object containing the file's attributes and metadata
    const oneKb = 1000;
    return value.size < oneKb;
  }
  constructor(
    @InjectRepository(Company)
    private companysRepository: Repository<Company>,
  ) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const company: Company = this.companysRepository.create(createCompanyDto);
    return await this.companysRepository.save(company);
  }

  async findAll(): Promise<Company[]> {
    // return this.companysRepository.find();
    const requirements = await this.companysRepository
      .createQueryBuilder('company')
      .leftJoinAndSelect('company.neighborhood', 'neighborhood')
      .leftJoinAndSelect('company.third', 'third')
      .getMany();
    return requirements;
  }

  findOne(id: string): Promise<Company> {
    return this.companysRepository.findOneBy({ id });
  }

  findCompany(): Promise<Company[]> {    
    const company = this.companysRepository.find();
    return company;
  }

  async update(
    id: string,
    updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company> {
    const company: Company = await this.companysRepository.findOneBy({
      id,
    });
    const editedCompany: Company = Object.assign(company, updateCompanyDto);
    return await this.companysRepository.save(editedCompany);
  }

  async remove(id: string): Promise<Company> {
    const company: Company = await this.companysRepository.findOneBy({
      id,
    });
    return await this.companysRepository.softRemove(company);
  }

  /*
  async findLogo(id: string): Observable<string> {
    console.log(id);
    return 'Logo.png';
  }
  */
}

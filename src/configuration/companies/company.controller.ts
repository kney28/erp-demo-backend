import {
    Controller,
    Get,
    Post,
    Body,
  } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { Company } from './entities/company.entity';

@Controller('company')
export class CompanyController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get()
  findCompany(): Promise<Company[]> {
    return this.companiesService.findCompany();
  }
}
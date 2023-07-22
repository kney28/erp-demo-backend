import {
    Controller,
    Get,
//    StreamableFile,
  } from '@nestjs/common';
// import { createReadStream } from 'fs';
// import { join } from 'path';
import { CompaniesService } from './companies.service';
import { Company } from './entities/company.entity';

@Controller('company')
export class CompanyController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get()
  findCompany(): Promise<Company[]> {
    return this.companiesService.findCompany();
  }
/*/////Descargar archivo////////
  @Get('getLogo')
  getLogo(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'uploads/configuration/Logo.png'));
    return new StreamableFile(file);
  }
*/
}
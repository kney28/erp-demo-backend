import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
//  Request,
//  Res,
} from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Company } from './entities/company.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
// import { Observable, switchMap, of } from 'rxjs';

@Controller('configuration/companies')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companiesService.create(createCompanyDto);
  }

  @Get()
  findAll(): Promise<Company[]> {
    return this.companiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Company> {
    return this.companiesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company> {
    return this.companiesService.update(id, updateCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Company> {
    return this.companiesService.remove(id);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
      storage : diskStorage({
        destination : './uploads/configuration',
        filename : function(req, file, cb) {
          const fullname = file.originalname.split('.');
          cb(null, 'Logo.' + fullname[fullname.length - 1]);
        }
      }),
    })
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return {
      op: 'OK',
      msg: `Archivo ${file.filename} cargado correctamente`,
      filename: file.filename
    }
  }

  /*
  @Get('logo')
  async findLogo(@Request() req, @Res() res): Promise<Observable<Object>> {
    const userId = res.user.id;
    return this.companiesService.findLogo(userId).pipe(
      switchMap((imageName: string) => {
        return of(res.sendFile(imageName, { root: './uploads/configuration' }))
      })
    );
  }
  */
}

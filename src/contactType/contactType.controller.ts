import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ContactTypeService } from './contactType.service';
import { CreateContactTypeDto } from './dto/create-contactType.dto';
import { UpdateContactTypeDto } from './dto/update-contactType.dto';
import { ContactType } from './entities/contactType.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('contacttype')
@UseGuards(JwtAuthGuard)
@ApiTags('Tipo de contacto')
@ApiBearerAuth()
export class ContactTypeController {
  constructor(private readonly contactTypeService: ContactTypeService) {}

  @Post()
  create(
    @Body() createContactTypeDto: CreateContactTypeDto,
  ): Promise<ContactType> {
    return this.contactTypeService.create(createContactTypeDto);
  }

  @Get()
  findAll(): Promise<ContactType[]> {
    return this.contactTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ContactType> {
    return this.contactTypeService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateContactTypeDto: UpdateContactTypeDto,
  ): Promise<ContactType> {
    return this.contactTypeService.update(id, updateContactTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<ContactType> {
    return this.contactTypeService.remove(id);
  }
}

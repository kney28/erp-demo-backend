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
import { ContactTypeService } from './contact-type.service';
import { CreateContactTypeDto } from './dto/create-contact-type.dto';
import { UpdateContactTypeDto } from './dto/update-contact-type.dto';
import { ContactType } from './entities/contact-type.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('contact-type')
@UseGuards(JwtAuthGuard)
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

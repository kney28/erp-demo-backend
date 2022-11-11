import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { ThirdPersonsService } from './thirdPersons.service';
import { CreateThirdPersonDto } from './dto/create-thirdPerson.dto';
import { UpdateThirdPersonDto } from './dto/update-thirdPerson.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ThirdPerson } from './entities/thirdPersonEntity';

@Controller('thirdpersons')
@UseInterceptors(ClassSerializerInterceptor)
export class ThirdPersonsController {
  constructor(private readonly thirdPersonsService: ThirdPersonsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Body() createThirdPersonDto: CreateThirdPersonDto,
  ): Promise<ThirdPerson> {
    return this.thirdPersonsService.create(createThirdPersonDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(): Promise<ThirdPerson[]> {
    return this.thirdPersonsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string): Promise<ThirdPerson> {
    return this.thirdPersonsService.findOneById(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateThirdPersonDto: UpdateThirdPersonDto,
  ): Promise<ThirdPerson> {
    return this.thirdPersonsService.update(id, updateThirdPersonDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string): Promise<ThirdPerson> {
    return this.thirdPersonsService.remove(id);
  }
}

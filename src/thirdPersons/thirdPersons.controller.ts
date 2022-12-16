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
import { ThirdPerson } from './entities/thirdPerson.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('thirdpersons')
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('terceros')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class ThirdPersonsController {
  constructor(private readonly thirdPersonsService: ThirdPersonsService) {}

  @Post()
  create(
    @Body() createThirdPersonDto: CreateThirdPersonDto,
  ): Promise<ThirdPerson> {
    return this.thirdPersonsService.create(createThirdPersonDto);
  }

  @Get()
  findAll(): Promise<ThirdPerson[]> {
    return this.thirdPersonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ThirdPerson> {
    return this.thirdPersonsService.findOneById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateThirdPersonDto: UpdateThirdPersonDto,
  ): Promise<ThirdPerson> {
    return this.thirdPersonsService.update(id, updateThirdPersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<ThirdPerson> {
    return this.thirdPersonsService.remove(id);
  }
}

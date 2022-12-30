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
import { ThirdPersonService } from './third-person.service';
import { CreateThirdPersonDto } from './dto/create-third-person.dto';
import { UpdateThirdPersonDto } from './dto/update-third-person.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ThirdPerson } from './entities/third-person.entity';

@Controller('thirdperson')
@UseGuards(JwtAuthGuard)
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('terceros')
@ApiBearerAuth()
export class ThirdPersonController {
  constructor(private readonly thirdPersonService: ThirdPersonService) {}

  @Post()
  create(
    @Body() createThirdPersonDto: CreateThirdPersonDto,
  ): Promise<ThirdPerson> {
    return this.thirdPersonService.create(createThirdPersonDto);
  }

  @Get()
  findAll(): Promise<ThirdPerson[]> {
    return this.thirdPersonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ThirdPerson> {
    return this.thirdPersonService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateThirdPersonDto: UpdateThirdPersonDto,
  ): Promise<ThirdPerson> {
    return this.thirdPersonService.update(id, updateThirdPersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<ThirdPerson> {
    return this.thirdPersonService.remove(id);
  }
}

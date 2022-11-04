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
import { SocialsService } from './socials.service';
import { CreateSocialDto } from './dto/create-social.dto';
import { UpdateSocialDto } from './dto/update-social.dto';
import { Social } from './entities/social.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('socials')
@UseGuards(JwtAuthGuard)
export class SocialsController {
  constructor(private readonly socialsService: SocialsService) {}

  @Post()
  create(@Body() createSocialDto: CreateSocialDto) {
    return this.socialsService.create(createSocialDto);
  }

  @Get()
  findAll(): Promise<Social[]> {
    return this.socialsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Social> {
    return this.socialsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSocialDto: UpdateSocialDto,
  ): Promise<Social> {
    return this.socialsService.update(id, updateSocialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Social> {
    return this.socialsService.remove(id);
  }
}

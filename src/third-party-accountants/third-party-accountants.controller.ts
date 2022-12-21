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
import { ThirdPartyAccountantsService } from './third-party-accountants.service';
import { CreateThirdPartyAccountantDto } from './dto/create-third-party-accountant.dto';
import { UpdateThirdPartyAccountantDto } from './dto/update-third-party-accountant.dto';
import { ThirdPartyAccountant } from './entities/third-party-accountant.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('third-party-accountants')
@ApiTags('Terceros contables')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class ThirdPartyAccountantsController {
  constructor(
    private readonly thirdPartyAccountantsService: ThirdPartyAccountantsService,
  ) {}

  @Post()
  create(
    @Body() createThirdPartyAccountantDto: CreateThirdPartyAccountantDto,
  ): Promise<ThirdPartyAccountant> {
    return this.thirdPartyAccountantsService.create(
      createThirdPartyAccountantDto,
    );
  }

  @Get()
  findAll() {
    return this.thirdPartyAccountantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.thirdPartyAccountantsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateThirdPartyAccountantDto: UpdateThirdPartyAccountantDto,
  ) {
    return this.thirdPartyAccountantsService.update(
      id,
      updateThirdPartyAccountantDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.thirdPartyAccountantsService.remove(id);
  }
}

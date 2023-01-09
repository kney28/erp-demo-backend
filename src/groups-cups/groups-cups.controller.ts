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
import { GroupsCupsService } from './groups-cups.service';
import { CreateGroupsCupDto } from './dto/create-groups-cup.dto';
import { UpdateGroupsCupDto } from './dto/update-groups-cup.dto';
import { GroupsCup } from './entities/groups-cup.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('groups-cups')
@ApiTags('Grupos CUPS')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class GroupsCupsController {
  constructor(private readonly groupsCupsService: GroupsCupsService) {}

  @Post()
  create(@Body() createGroupsCupDto: CreateGroupsCupDto): Promise<GroupsCup> {
    return this.groupsCupsService.create(createGroupsCupDto);
  }

  @Get()
  findAll(): Promise<GroupsCup[]> {
    return this.groupsCupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<GroupsCup> {
    return this.groupsCupsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGroupsCupDto: UpdateGroupsCupDto,
  ): Promise<GroupsCup> {
    return this.groupsCupsService.update(id, updateGroupsCupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<GroupsCup> {
    return this.groupsCupsService.remove(id);
  }
}

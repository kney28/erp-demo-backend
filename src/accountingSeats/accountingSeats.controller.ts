import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AccountingSeatsService } from './accountingSeats.service';
import { CreateAccountingSeatDto } from './dto/create-accountingSeat.dto';
import { UpdateAccountingSeatDto } from './dto/update-accountingSeat.dto';
import { AccountingSeat } from './entities/accountingSeat.entity';

@Controller('accountingseats')
@UseInterceptors(ClassSerializerInterceptor)
export class AccountingSeatsController {
  constructor(
    private readonly accountingSeatsService: AccountingSeatsService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Body() createAccountingSeatDto: CreateAccountingSeatDto,
  ): Promise<AccountingSeat> {
    return this.accountingSeatsService.create(createAccountingSeatDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(): Promise<AccountingSeat[]> {
    return this.accountingSeatsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string): Promise<AccountingSeat> {
    return this.accountingSeatsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateAccountingSeatDto: UpdateAccountingSeatDto,
  ): Promise<AccountingSeat> {
    return this.accountingSeatsService.update(id, updateAccountingSeatDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string): Promise<AccountingSeat> {
    return this.accountingSeatsService.remove(id);
  }
}

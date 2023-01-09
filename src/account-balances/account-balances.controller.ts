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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AccountBalancesService } from './account-balances.service';
import { CreateAccountBalanceDto } from './dto/create-account-balance.dto';
import { UpdateAccountBalanceDto } from './dto/update-account-balance.dto';

@Controller('account-balances')
@ApiTags('Saldos Cuentas')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class AccountBalancesController {
  constructor(
    private readonly accountBalancesService: AccountBalancesService,
  ) {}

  @Post()
  create(@Body() createAccountBalanceDto: CreateAccountBalanceDto) {
    return this.accountBalancesService.create(createAccountBalanceDto);
  }

  @Get()
  findAll() {
    return this.accountBalancesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountBalancesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountBalanceDto: UpdateAccountBalanceDto,
  ) {
    return this.accountBalancesService.update(id, updateAccountBalanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountBalancesService.remove(id);
  }
}

import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { AccountingtermssService } from './accountingtermss.service'; 
import { CreateAccountingtermsDto } from './dto/create-accountingterms.dto'; 
import { UpdateAccountingtermsDto } from './dto/update-accountingterms.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Accountingterms } from './entities/accountingterms.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 

@Controller('accountingtermss') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class AccountingtermssController { 
	constructor(private readonly accountingtermssService: AccountingtermssService) {} 

	@Post() 
	create( 
		@Body() createAccountingtermsDto: CreateAccountingtermsDto, 
	): Promise<Accountingterms> { 
		return this.accountingtermssService.create(createAccountingtermsDto); 
	} 

	@Get() 
	findAll(): Promise<Accountingterms[]> { 
		return this.accountingtermssService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Accountingterms> { 
		return this.accountingtermssService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateAccountingtermsDto: UpdateAccountingtermsDto, 
	): Promise<Accountingterms> { 
		return this.accountingtermssService.update(id, updateAccountingtermsDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Accountingterms> { 
		return this.accountingtermssService.remove(id); 
	} 
}
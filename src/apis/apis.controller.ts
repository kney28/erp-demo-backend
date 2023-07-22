import { 
	Controller, 
	Get, 
	Post, 
	Body, 
	Patch, 
	Param, 
	Delete, 
} from '@nestjs/common'; 
import { ApisService } from './apis.service'; 
import { CreateApiDto } from './dto/create-api.dto'; 
import { UpdateApiDto } from './dto/update-api.dto'; 
import { UseGuards, UseInterceptors } from '@nestjs/common/decorators'; 
import { ClassSerializerInterceptor } from '@nestjs/common/serializer'; 
import { Api } from './entities/api.entity'; 
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('apis') 
@UseInterceptors(ClassSerializerInterceptor) 
@UseGuards(JwtAuthGuard) 
export class ApisController { 
	constructor(private readonly apisService: ApisService) {} 

	/*
	@Post() 
	create( 
		@Body() createApiDto: CreateApiDto, 
	): Promise<Api> { 
		return this.apisService.create(createApiDto); 
	} 

	@Get() 
	findAll(): Promise<Api[]> { 
		return this.apisService.findAll(); 
	} 

	@Get(':id') 
	findOne(@Param('id') id: string): Promise<Api> { 
		return this.apisService.findOne(id); 
	} 

	@Patch(':id') 
	update( 
		@Param('id') id: string, 
		@Body() updateApiDto: UpdateApiDto, 
	): Promise<Api> { 
		return this.apisService.update(id, updateApiDto); 
	} 

	@Delete(':id') 
	remove(@Param('id') id: string): Promise<Api> { 
		return this.apisService.remove(id); 
	} 
	*/

///////////////////////////////SADMIN//////////////////////////////
/*
	@Get('loginSadmin')
    loginSadmin() {
      return this.apisService.loginSadmin();
    }
*/
/*

	@Get('terceroSadmin/:id')
    terceroSadmin(@Param('id') id: string): Promise<TerceroSadmin> {
      console.log('ID desde el controlador: ',id);
      return this.apisService.terceroSadmin(id);
    }

	@Get('creditoRotativoSadmin/:id')
    creditoRotativoSadmin(@Param('id') id: string): Promise<RotativoSadmin> {
      console.log('ID desde el controlador: ',id);
      return this.apisService.creditoRotativoSadmin(id);
    }

	@Get('totalFijoSadmin/:id')
    totalFijoSadmin(@Param('id') id: string): Promise<any> {
      console.log('ID desde el controlador: ',id);      
      return this.apisService.totalFijoSadmin(id);
    }
*/
///////////////////////////////REFACIL PAY//////////////////////////////
/*
	@Get('loginRefacilPay')
	loginRefacilPay() {
		return this.apisService.loginRefacilPay();
	}
*/
/*
	@Get('tokenTransaccionalRefacilPay')
    tokenTransaccionalRefacilPay(): Promise<any> {
      	return this.apisService.tokenTransaccionalRefacilPay();
    }
*/
/*
	@Get('listarBancosRefacilPay')
	listarBancosRefacilPay(): Promise<any> {
		return this.apisService.listarBancosRefacilPay();
	}

	@Post('generarBotonPseRefacilPay')
    generarBotonPseRefacilPay(@Body() paymentMethod:any): Promise<any> {
      return this.apisService.generarBotonPseRefacilPay(paymentMethod);
    }
*/
///////////////////////////////Marketplace//////////////////////////////
/*
	@Get('listarProductosRefacil')
    listarProductosRefacil(): Promise<any> {
      return this.apisService.listarProductosRefacil();
    }
*/
}
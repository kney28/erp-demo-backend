import { IsNotEmpty } from 'class-validator'; 
import { Unique } from 'typeorm'; 

export class CreatePatientDto { 
	@IsNotEmpty() 
	@Unique(['code']) 
	code: string; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//documettype: <define type enum>; 

	//@IsNotEmpty() 
	//documentnumber: string; 

	//@IsNotEmpty() 
	//name1: string; 

	//@IsNotEmpty() 
	//name2: string; 

	//@IsNotEmpty() 
	//lastname1: string; 

	//@IsNotEmpty() 
	//lastname2: string; 

	//@IsNotEmpty() 
	//fullname: string; 

	//@IsNotEmpty() 
	//neighborhood: number; 

	//@IsNotEmpty() 
	//municipality: number; 

	//@IsNotEmpty() 
	//country: number; 

	//@IsNotEmpty() 
	//email: string; 

	//@IsNotEmpty() 
	//datebirth: Date; 

	//@IsNotEmpty() 
	//age: string; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//sex: <define type enum>; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//maritalstatus: <define type enum>; 

	//@IsNotEmpty() 
	//charge: number; 

	//@IsNotEmpty() 
	//occupation: number; 

	//@IsNotEmpty() 
	//mothername: string; 

	//@IsNotEmpty() 
	//fathername: string; 

	//@IsNotEmpty() 
	//regimetype: number; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//contributortype: <define type enum>; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//kinship: <define type enum>; 

	//@IsNotEmpty() 
	//copgovfee: number; 

	//@IsNotEmpty() 
	//sisbenlevel: number; 

	//@IsNotEmpty() 
	//benefitplan: number; 

	//@IsNotEmpty() 
	//menbership: string; 

	//@IsNotEmpty() 
	//patientaddress: number; 

	//@IsNotEmpty() 
	//phone: number; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//status: <define type enum>; 

}
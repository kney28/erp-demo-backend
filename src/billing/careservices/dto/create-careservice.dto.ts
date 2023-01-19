import { IsNotEmpty } from 'class-validator'; 
import { Unique } from 'typeorm'; 

export class CreateCareserviceDto { 
	@IsNotEmpty() 
	@Unique(['code']) 
	code: string; 

	@IsNotEmpty() 
	description: string; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//typeservice: <define type enum>; 

	//@IsNotEmpty() 
	//headquarters: number; 

	@IsNotEmpty() 
	idpharmacy: number; 

	//@IsNotEmpty() 
	//costcenter: number; 

	//@IsNotEmpty() 
	//incomeaccount: number; 

	//@IsNotEmpty() 
	//incomeaccountindividuals: number; 

	//@IsNotEmpty() 
	//capitationincomeaccount: number; 

	//@IsNotEmpty() 
	//costaccountpharmacyorders: number; 

	//@IsNotEmpty() 
	//discountaccount: number; 

	//@IsNotEmpty() 
	//feesettlementaccount: number; 

	//@IsNotEmpty() 
	//accountpreviousperiods: number; 

	//Remember add <type enum> import and add IsEnum in import class-validator 
	//@IsNotEmpty() 
	//@IsEnum(<define type enum>) 
	//status: <define type enum>; 

} 

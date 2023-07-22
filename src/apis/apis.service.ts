import { Injectable, ForbiddenException } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateApiDto } from './dto/create-api.dto'; 
import { UpdateApiDto } from './dto/update-api.dto'; 
import { Api } from './entities/api.entity'; 
import { catchError } from 'rxjs';
// import axios from 'axios';

@Injectable() 
export class ApisService { 
	constructor( 
		@InjectRepository(Api) 
		private apisRepository: Repository<Api>,
		// private http: HttpService, 
	) {} 

	async create(createApiDto: CreateApiDto): Promise<Api> { 
		const api: Api = 
			this.apisRepository.create(createApiDto); 
		return await this.apisRepository.save(api); 
	} 

	findAll(): Promise<Api[]> { 
		return this.apisRepository.find(); 
	} 

	findOne(id: string): Promise<Api> { 
		return this.apisRepository.findOneBy({ id }); 
	} 

	findOneByName(name: string): Promise<Api> {
		return this.apisRepository.findOneBy({name});
	}

	async update( 
		id: string, 
		updateApiDto: UpdateApiDto, 
	): Promise<Api> { 
		const api: Api = await this.apisRepository.findOneBy({ 
			id, 
		}); 
		const editedApi: Api = Object.assign( 
			api, 
			updateApiDto, 
		); 
		return await this.apisRepository.save(editedApi); 
	} 

	async remove(id: string): Promise<Api> { 
		const api: Api = await this.apisRepository.findOneBy({ 
			id, 
		}); 
		return await this.apisRepository.softRemove(api); 
	} 

///////////////////////////////SADMIN//////////////////////////////
/*
	@Cron('1 1 * * * *')
	async loginSadmin () {
		const apiSadmin: Api = await this.findOneByName('API_SADMIN');
    	console.log('Ingreso a login Sadmin');
    	axios.post(apiSadmin.api_login, {  
        	username: apiSadmin.api_user,
        	Password: apiSadmin.api_password,
        	grant_type: 'password'
    	}, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
    	}).then(result => {
			apiSadmin.api_tokent = result.data.access_token;
        	console.log('access_token: ', apiSadmin.api_tokent);
        	return this.apisRepository.save(apiSadmin);
      	},
    	).catch(
			catchError(() => {
				throw new ForbiddenException('Error login Sadmin');
			}),
    	);
  	}	

	async terceroSadmin (id: string): Promise<TerceroSadmin> {
		const apiSadmin: Api = await this.findOneByName('API_SADMIN');
		let asociadoSadmin: TerceroSadmin = null;
		await axios.get(apiSadmin.api_base + 'terceros', {
			headers: {
				'Authorization': 'Bearer ' + apiSadmin.api_tokent,
				'Content-Type': 'none'
			}
		})
		.then(result => {
			asociadoSadmin = result.data.filter(function(n: TerceroSadmin){
				return n.Identif == id;
			})[0];
			console.log('Usuario: ', asociadoSadmin);
		},
		).catch(
			catchError(() => {
				throw new ForbiddenException('Error al consultar tercero');
			}),
		);
		return asociadoSadmin;
	}

	async creditoRotativoSadmin (id: string): Promise<RotativoSadmin> {
		const apiSadmin: Api = await this.findOneByName('API_SADMIN');
		console.log('Credito rotativo del terceros');
		console.log('ID: ', id);
		let rotativoSadmin: RotativoSadmin;
		await axios.get(apiSadmin.api_base + 'Rotativos?sEstado=ACTIVOS', {
			headers: {
				'Authorization': 'Bearer ' + apiSadmin.api_tokent,
				'Content-Type': 'none'
			}
		})
		.then(result => {
			rotativoSadmin = result.data.obj.filter(function(n: RotativoSadmin){
			  return n.Identificacion == id;
			})[0];
			console.log('Rotativo: ', rotativoSadmin);
		  },
		).catch(
		  catchError(() => {
			throw new ForbiddenException('Error al consultar rotativo');
		  }),
		);
		return rotativoSadmin;
	}

	async totalFijoSadmin (id: string): Promise<any> {
		const apiSadmin: Api = await this.findOneByName('API_SADMIN');
		let day = new Date();
		console.log('Total de la cuota del tercero');
		console.log('ID: ', id);
		console.log('Fecha: ', day.getDate() + '-' + day.getMonth() + '-' + day.getFullYear());
		let items: any;
		let fechaPago = 'Pendiente';
		let total = 0;
		let ruta = apiSadmin.api_base + 'cargarPendientePagar?sIdentif=' + id + '&sFechaPago=' + day.getDate() + '-' + (day.getMonth() + 1) + '-' + day.getFullYear();
		await axios.get(ruta, {
			headers: {
				'Authorization': 'Bearer ' + apiSadmin.api_tokent,
				'Content-Type': 'none'
			}
		})
		.then(result => {
		  if(result.data){
			if(!result.data.Message){
			  items = result.data.obj;
			  console.log('Items: ', items);
			  fechaPago = result.data ? result.data.obj ? result.data.obj[0] ? result.data.obj[0].FechaVence : 'Pendiente' : 'Pendiente' : 'Pendiente';
			  
			  for(const item of items){
				if(item){
				  total = total + parseInt(item.ValorAbono);
				}
			  }
			}
		  }
		},
		).catch(
		  catchError(() => {
			throw new ForbiddenException('Error al consultar cuota del tercero');
		  }),
		);
		return {
		  'fechaPago': fechaPago,
		  'total': total,
		  'items': items
		};
	}


///////////////////////////////REFACIL PAY//////////////////////////////
	@Cron('9 1 * * * *')
	async loginRefacilPay () {
		const apiRefacilPay: Api = await this.findOneByName('API_Refacil_Pay');
		console.log('Ingreso a login Refacil Pay');
		await axios.post(apiRefacilPay.api_login, {  
			username: apiRefacilPay.api_user,
			password: apiRefacilPay.api_password
		}, {
		}).then(result => {
			apiRefacilPay.api_tokent = result.data.data.token;
			console.log('access_token: ', apiRefacilPay.api_tokent);
			return this.apisRepository.save(apiRefacilPay);
		},
		).catch(
		catchError(() => {
			throw new ForbiddenException('Error login Refacil Pay');
		}),
		);
	}

	async tokenTransaccionalRefacilPay () {
		const apiRefacilPay: Api = await this.findOneByName('API_Refacil_Pay');
		await axios.post(apiRefacilPay.api_base + 'trx-token/generate', {
		  	"service": "/cash-in/generate/payment-method/token"
		}, {
			headers: {
				'Authorization': 'Bearer ' +  apiRefacilPay.api_tokent
			}
		}).then(result => {
			apiRefacilPay.api_tokent_transaccional = result.data.data.token
		  	console.log('Tokent transaccional: ', apiRefacilPay.api_tokent_transaccional)
			this.apisRepository.save(apiRefacilPay)
		}).catch(
		  catchError(() => {
			throw new ForbiddenException('Error al generar tokent transaccional');
		  }),
		);
	}

	async listarBancosRefacilPay (): Promise<any> {
		const apiRefacilPay: Api = await this.findOneByName('API_Refacil_Pay');
		console.log('Listar bancos refacil pay');
		var bancos: any
		await axios.post(apiRefacilPay.api_base + 'payment/features', {  
			id: 133
		}, {
		  headers: {
			'Authorization': 'Bearer ' +  apiRefacilPay.api_tokent
		  }
		}).then(result => {
			bancos = result.data.data.banks;
			console.log('Bancos: ', bancos);
		  },
		).catch(
		  catchError(() => {
			throw new ForbiddenException('Error al consultar bancos');
		  }),
		);
		return bancos
	}

	async generarBotonPseRefacilPay (paymentMethod:any): Promise<any> {
		console.log('generarBotonPSE')
		// this.tokenTransaccionalRefacilPay()
		const apiRefacilPay: Api = await this.findOneByName('API_Refacil_Pay');
		await axios.post(apiRefacilPay.api_base + 'trx-token/generate', {
			"service": "/cash-in/generate/payment-method/token"
		}, {
			headers: {
				'Authorization': 'Bearer ' +  apiRefacilPay.api_tokent
			}
		}).then(result => {
			apiRefacilPay.api_tokent_transaccional = result.data.data.token
			console.log('Tokent transaccional: ', apiRefacilPay.api_tokent_transaccional)
			this.apisRepository.save(apiRefacilPay)
		}).catch(
			catchError(() => {
			throw new ForbiddenException('Error al generar tokent transaccional');
			}),
		);
		console.log('Tokent transaccional: ', apiRefacilPay.api_tokent_transaccional);
		console.log(paymentMethod);
		let day = new Date();
		let tipoPersona = 'Natural';
		let response = {};
		if (paymentMethod.typePerson == 1) {
		  tipoPersona = 'Jurídica'
		}
		await axios.post(apiRefacilPay.api_base + 'cash-in/generate/payment-method/token', {
		  paymentMethod: {
			id: 133, //PSE
			documentType: paymentMethod.documentType,
			typePerson: paymentMethod.typePerson,
			bankId: paymentMethod.bankId,
			documentNumber: paymentMethod.documentNumber,
			name: paymentMethod.name,
			cellphone: paymentMethod.cellphone,
			address: paymentMethod.address,
			email: paymentMethod.email
		  },
		  amount: paymentMethod.amount,
		  brandId: 82, //ID del comercio
		  webhookUrl: 'https://webhook.site/4053d5a9-06ef-46a0-81cc-d0536352e624',
		  returnUrl: '',
		  reference1: paymentMethod.documentNumber + '-' + day.getTime(),
		  reference2: {
			Label: {
			  Amount: paymentMethod.amount,
			  Name: paymentMethod.name,
			  Email: paymentMethod.email,
			  CellPhone: paymentMethod.cellphone,
			  PersonType: tipoPersona,
			  DocumentType: paymentMethod.documentType,
			  DocumentNumber: paymentMethod.documentNumber,
			  Product: "Crédito CTCOOP",
			  Description: "Transaccion",
			  Contract: "65165456652",
			  ShortNumber: null,
			  Commerce: "CTCOOP",
			  Reference1: null,
			  Reference2: null,
			  Audit: null
			},
			Data: {
			  Typedoc: paymentMethod.documentType,
			  docnum: paymentMethod.documentNumber
			}
		  } 
		}, {
		  headers: {
			'Authorization': 'Bearer ' +  apiRefacilPay.api_tokent,
			'x-transaction-token': '' + apiRefacilPay.api_tokent_transaccional
		  }
		}).then(result => {
		  console.log(result.data )
		  response = result.data
		}).catch(
		  catchError(() => {
			throw new ForbiddenException('Error al generar boton de pago');
		  }),
		);
		return response
	}

///////////////////////////////Marketplace//////////////////////////////
	async listarProductosRefacil (): Promise<any> {
		const apiMarketplace: Api = await this.findOneByName('API_Marketplace');
		console.log('Listar productos refacil Marketplace');
		var productos: any
		await axios.get(apiMarketplace.api_base + 'products/list', {
		headers: {
			'Authorization': 'Bearer ' +  apiMarketplace.api_tokent
		}
		}).then(result => {
			productos = result.data;
			console.log('Productos: ', productos);
		},
		).catch(
		catchError(() => {
			throw new ForbiddenException('Error al consultar productos en la marketplace');
		}),
		);
		return productos
	}
*/
}
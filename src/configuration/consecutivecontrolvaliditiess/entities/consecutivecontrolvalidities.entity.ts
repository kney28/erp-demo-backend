import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 
import { Validity } from 'src/configuration/validity/entities/validity.entity';

export enum ConsecutivecontrolvaliditiesStatus {
	ACTIVE = 1,
	INACTIVE = 2,
  }

export enum ConsecontvaliOption {
	PROGRAMACIONPRESUPUESTALINGRESOS = 1,
	ADICIONESREDUCCIONESPRESUPUESTALESINGRESOS = 2,
	TRASLADOSPRESUPUESTALESINGRESOS = 3,
	RECAUDOS = 4,
	AJUSTESRECAUDOS = 5,
	PROGRAMACIONPRESUPUESTALGASTOS = 6,
	ADICIONESREDUCCIONESPRESUPUESTALESGASTOS = 7,
	TRASLADOSPRESUPUESTALESGASTOS = 8,
	SOLICITUDESDISPONIBILIDADESPRESUPUESTALES = 9,
	DISPONIBILIDADESPRESUPUESTALES = 10,
	AJUSTESDISPONIBILIDADPRESUPUESTAL = 11,
	COMPROMISOS = 12,
	AJUSTESCOMPROMISOS = 13,
	RESERVASPRESUPUESTALES = 14,
	AJUSTESRESERVASPRESUPUESTALES = 15,
	OBLIGACIONES = 16,
	AJUSTESOBLIGACIONES = 17,
	CUENTASPORPAGARPRESUPUESTALES = 18,
	AJUSTESCUENTASPORPAGARPRESUPUESTALES = 19,
	PAGOS = 20,
	AJUSTESPAGOS = 21,
	ASIENTOSCONTABLES = 22,
  }

export enum ConsecontvaliProcess {
	GESTIONPRESUPUESTAL = 1,
	GESTIONCONTABLE = 2,
  }

@Entity() 
//Unique(['code']) 
export class Consecutivecontrolvalidities extends BaseEntity { 
	//@Column() 
	//code: string; 

	@ManyToOne(() => Validity, (validity) => validity.detailvalidity, {
		eager: true
	})
	validity: Validity; 

	//The next column is ENUM, please complete the code necessary  
	@Column({ 
		type: 'enum', 
		enum: ConsecontvaliProcess, 
		default: ConsecontvaliProcess.GESTIONPRESUPUESTAL, 
	}) 
	process: ConsecontvaliProcess; 

	//The next column is ENUM, please complete the code necessary  
	@Column({ 
		type: 'enum', 
		enum: ConsecontvaliOption, 
		default: ConsecontvaliOption.PROGRAMACIONPRESUPUESTALINGRESOS, 
	}) 
	option: ConsecontvaliOption; 

	@Column() 
	number: number; 

	//The next column is ENUM, please complete the code necessary  
	@Column({ 
		type: 'enum', 
		enum: ConsecutivecontrolvaliditiesStatus, 
		default: ConsecutivecontrolvaliditiesStatus.ACTIVE, 
	}) 
	status: ConsecutivecontrolvaliditiesStatus; 

} 

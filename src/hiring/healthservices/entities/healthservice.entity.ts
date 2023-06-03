import { BaseEntity } from 'src/base/baseEntity'; 
import { Column, Entity, Unique, ManyToOne, OneToMany } from 'typeorm'; 
import { Status } from 'src/base/baseEntity';
import { Parameterizationcups } from 'src/hiring/parameterizationcupss/entities/parameterizationcups.entity';
import { Careservice } from 'src/billing/careservices/entities/careservice.entity';
import { Parqxdetail3 } from 'src/hiring/parqxdetail3s/entities/parqxdetail3.entity';
import { Parqxdetail2 } from 'src/hiring/parqxdetail2s/entities/parqxdetail2.entity';

export enum ServiceType {
	NINGUNO = 0,
	NO_QUIRURGICO = 1,
	QUIRURGICO = 2,
	PAQUETE = 3,
} 

export enum NqxService {
	NINGUNO = 0,
	CIRUJANO_GINECOOBSTETRA = 1,
	ANESTESIOLOGO = 2,
	AYUDANTIA_QUIRURGICA = 3,
	DERECHOS_SALA = 4,
	MATERIAL_SUTURA = 5,
	INSTRUMENTACION_QUIRURGICA = 6,
}

export enum ProposeProcedure {
	NINGUNO = 0,
	DIAGNOSTICO = 1,
	TERAPEUTICO = 2,
	PROTECCION_ESPECIFICA = 3,
	DETECCION_TEMPRANA_ENFERMEDAD_GENERAL = 4,
	DETECCION_TEMPRANA_ENFERMEDAD_LABORAL = 5,
}

export enum ConcepHealth {
	NINGUNO = 0,
	ESTANCIA_INDIVIDUAL = 1,
	HABITACION_COMPARTIDA = 2,
	UCI_ADULTOS = 3,
	UCI_NEONATAL = 4,
	CI_CUIDADOS_MEDIANOS = 5,
	INCUBADORA = 6,
	CONSULTA_MEDICA_GENERAL = 7,
	CONSULTA_ESPECIALISTA = 8,
	INTERCONSULTA = 9,
	VISITAS_HOSPITALARIAS = 10,
	HONORARIOS_CIRUJANOS = 11,
	HONORARIOS_ANESTESIA = 12,
	HONORARIOS_AYUDANTIA = 13,
	HONORARIOS_INSTRUMENTACION = 14,
	DERECHOS_SALAS = 15,
	DERECHOS_ANESTESIA = 16,
	DERECHOS_EQUIPOS = 17,
	INSUMOS_HOSPITALARIOS = 18,
	MATERIAL_QUIRURGICO = 19,
	MEDICAMENTOS = 20,
	OXIGENO = 21,
	LABORATORIO = 22,
	RADIOLOGIA = 23,
	TOMOGRAFIAS = 24,
	MEDICINA_NUCLEAR = 25,
	RESONANCIA_MAGNETICA = 26,
	EXAMENES_COMPLEMENTARIOS = 27,
	EXAMENES_VASCULARES = 28,
	HEMODINAMIA = 29,
	BANCO_SANGRE = 30,
	TERAPIAS = 31,
	AMBULANCIA = 32,
	FACTURACION_INTEGRAL = 33,
}

export enum ComplexityLevel {
	NINGUNO = 0,
	NIVEL_1 = 1,
	NIVEL_2 = 2,
	NIVEL_3 = 3,
	NIVEL_4 = 4,
	NIVEL_5 = 5,
}

export enum YesNot {
	YES = 1,
	NOT = 2,
}

export enum ConceptsRips {
	NINGUNO = 0,
	CONSULTAS = 1,
	PROCEDIMIENTOS_DIAGNOSTICO = 2,
	PROCEDIMIENTOS_TERAPEUTICOS_NO_QUIRURGICOS = 3,
	PROCEDIMIENTOS_TERAPEUTICOS_QUIRURGICOS = 4,
	PROCEDIMIENTOS_PROMOCION_PREVENCION = 5,
	ESTANCIAS = 6,
	HONORARIOS = 7,
	DERECHOS_SALA = 8,
	MATERIALES_INSUMOS = 9,
	BANCO_SANGRE = 10,
	PROTESIS_ORTESIS = 11,
	MEDICAMENTOS_POS = 12,
	MEDICAMENTOS_NO_POS = 13,
	TRASLADO_PACIENTES = 14,
	OTROS_SERVICIOS = 15,
}

export enum Sex {
	NINGUNO = 0,
	FEMENINO = 1,
	MASCULINO = 2,
	AMBOS = 3,
}

@Entity() 
@Unique(['code']) 
export class Healthservice extends BaseEntity { 
	@Column() 
	code: string; 

	@Column() 
	description: string; 

	//Campo relacional ++++++++++++++++++++++++++++
	//@Column() 
	//parcups: number; 
	//+++++++++++++++++++++++++++++++++++++++++++++

	@Column({
		type: 'enum',
		enum: ServiceType,
		default: ServiceType.NINGUNO
	}) 
	servicetype: number; 

	@Column({ 
		type: 'enum', 
		enum: NqxService, 
		default: NqxService.NINGUNO
	}) 
	nqxservice: NqxService; 

	@Column({ 
		type: 'enum', 
		enum: ProposeProcedure, 
		default: ProposeProcedure.NINGUNO 
	}) 
	porposeprocedure: ProposeProcedure; 
 
	@Column({ 
		type: 'enum', 
		enum: ConcepHealth, 
		default: ConcepHealth.NINGUNO
	}) 
	concepthealth: ConcepHealth; 

	@Column({ 
		type: 'enum', 
		enum: ComplexityLevel,  
	}) 
	complexitylevel: ComplexityLevel; 
 
	@Column({ 
		type: 'enum', 
		enum: YesNot, 
		default: YesNot.NOT, 
	}) 
	appprohiprep: YesNot; 

	@Column({ 
		type: 'enum', 
		enum: YesNot, 
		default: YesNot.NOT, 
	}) 
	arthroscopy: YesNot; 
 
	@Column({ 
		type: 'enum', 
		enum: YesNot, 
		default: YesNot.NOT, 
	}) 
	pathology: YesNot; 

	@Column({ 
		type: 'enum', 
		enum: ConceptsRips, 
		default: ConceptsRips.NINGUNO, 
	}) 
	conceptsrips: ConceptsRips; 

	@Column() 
	minimumage: number; 

	@Column() 
	maximumage: number; 

	@Column({ 
		type: 'enum', 
		enum: YesNot, 
		default: YesNot.NOT, 
	}) 
	pos: YesNot; 

	@Column({ 
		type: 'enum', 
		enum: Sex, 
		default: Sex.NINGUNO, 
	}) 
	sex: Sex; 

	@Column({ 
		type: 'enum', 
		enum: Status, 
		default: Status.ACTIVE, 
	}) 
	status: Status; 
  
	@Column({ 
		type: 'enum', 
		enum: YesNot, 
		default: YesNot.NOT, 
	}) 
	organizationalservices: YesNot; 

	@ManyToOne(() => Parameterizationcups, (parcups) => parcups.healthservice, {
		eager: true
	})
	parcups: Parameterizationcups;

	@ManyToOne(() => Careservice, (careservice) => careservice.healthservice, {
		eager: true
	})
	careservice: Careservice;

	@OneToMany(() => Parqxdetail3, (parqxdetail3) => parqxdetail3.healthservice)
	parqxdetail3: Parqxdetail3[];

	@OneToMany(() => Parqxdetail2, (parqxdetail2) => parqxdetail2.healthservice)
	parqxdetail2: Parqxdetail2[];
} 

import { Injectable, ConflictException } from '@nestjs/common'; 
import { InjectEntityManager, InjectRepository, TypeOrmModule } from '@nestjs/typeorm'; 
import { Repository, EntityManager } from 'typeorm'; 
import { CreateConsecutivosinvigenciaDto } from './dto/create-consecutivosinvigencia.dto'; 
import { UpdateConsecutivosinvigenciaDto } from './dto/update-consecutivosinvigencia.dto'; 
import { Consecutivosinvigencia } from './entities/consecutivosinvigencia.entity'; 

@Injectable() 
export class ConsecutivosinvigenciasService { 
	constructor( 
		@InjectRepository(Consecutivosinvigencia) 
		private consecutivosinvigenciasRepository: Repository<Consecutivosinvigencia>, 
		@InjectEntityManager()
		private readonly entityManager: EntityManager
	) {} 

	/*async create(createConsecutivosinvigenciaDto: CreateConsecutivosinvigenciaDto): Promise<Consecutivosinvigencia> { 
		const consecutivosinvigencia: Consecutivosinvigencia = 
			this.consecutivosinvigenciasRepository.create(createConsecutivosinvigenciaDto); 
		return await this.consecutivosinvigenciasRepository.save(consecutivosinvigencia); 
	}*/

	async create(param: CreateConsecutivosinvigenciaDto): Promise<Consecutivosinvigencia> {
		const entity: string = param.entity.toLocaleLowerCase()
		const querySequence = `SELECT pg_get_serial_sequence('${entity}', 'id') AS sequence_name;`
		const sequenceName = await this.entityManager.query(querySequence)
		const query = `ALTER SEQUENCE ${sequenceName[0].sequence_name} RESTART WITH ${param.numeracionInicial};`
		const result = await this.entityManager.query(query)
		const consecutivoSinVigencia = this.consecutivosinvigenciasRepository.create(param)
		return await this.consecutivosinvigenciasRepository.save(consecutivoSinVigencia);
	}

	findAll(): Promise<Consecutivosinvigencia[]> { 
		return this.consecutivosinvigenciasRepository.find(); 
	} 

	async findOne(entity: string): Promise<Consecutivosinvigencia> {
		const maxId = await this.entityManager.createQueryBuilder(entity, 'entity')
			.select('MAX(entity.id)','maxId')
			.getRawOne()
		const consecutivoSinVigencia = await this.consecutivosinvigenciasRepository.findOneBy({ entity }); 
	
		return {...maxId, ...consecutivoSinVigencia}
	} 

	async update( 
		id: string, 
		param: UpdateConsecutivosinvigenciaDto, 
	): Promise<Consecutivosinvigencia | {[key: string]: boolean | string}> {
		let consecutivosinvigencia: Consecutivosinvigencia
		let editedConsecutivosinvigencia: Consecutivosinvigencia
		let mensaje: string
		const entity: string = param.entity.toLocaleLowerCase()
		const maxId = await this.entityManager.createQueryBuilder(entity, 'entity')
			.select('MAX(entity.id)','maxId')
			.getRawOne()
		const validate = (numInicial: number, numMax: number): Promise<Consecutivosinvigencia | {[key: string]: boolean | string}> => {
			return new Promise(async (resolve, reject) => {
				if(numInicial <= numMax) {
					try{
						throw new ConflictException({ message: 'El número inicial debe ser mayor que el número actual' })
					}catch(e) {
						reject(e)
					}
					// reject({
					// 	statusCode: 500,
					// 	message: 'El número inicial debe ser mayor que el número actual'
					// })
				}else {
					try{
						const querySequence = `SELECT pg_get_serial_sequence('${entity}', 'id') AS sequence_name;`
						const sequenceName = await this.entityManager.query(querySequence)
						const query = `ALTER SEQUENCE ${sequenceName[0].sequence_name} RESTART WITH ${param.numeracionInicial};`
						await this.entityManager.query(query)
						consecutivosinvigencia = await this.consecutivosinvigenciasRepository.findOneBy({ 
							id, 
						}); 
						editedConsecutivosinvigencia = Object.assign( 
							consecutivosinvigencia, 
							param, 
						);						
						resolve(await this.consecutivosinvigenciasRepository.save(editedConsecutivosinvigencia))
					}catch (e){
						reject(e)
					}
				}
			})
		}
		
		return validate(param.numeracionInicial, maxId.maxId)	
	} 

	async remove(id: string): Promise<Consecutivosinvigencia> { 
		const consecutivosinvigencia: Consecutivosinvigencia = await this.consecutivosinvigenciasRepository.findOneBy({ 
			id, 
		}); 
		return await this.consecutivosinvigenciasRepository.softRemove(consecutivosinvigencia); 
	}
}
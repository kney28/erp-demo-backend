import { PartialType } from '@nestjs/swagger'; 
import { CreateConsecutivosinvigenciaDto } from './create-consecutivosinvigencia.dto'; 

export class UpdateConsecutivosinvigenciaDto extends PartialType(CreateConsecutivosinvigenciaDto) {} 

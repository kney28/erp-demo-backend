import { BaseEntity } from '../../base/baseEntity';
import { Column, Entity, Unique } from 'typeorm';

@Entity()
@Unique(['code', 'deleted_at'])
export class Country extends BaseEntity {
  @Column()
  code: string;

  @Column({ length: 60 })
  description: string;

  @Column()
  status: number;

  constructor(code: string, description?: string, status?: number);
  constructor(code: string, description: string, status?: number);
  constructor(code: string, description: string, status: number);
  constructor(code?: string, description?: string, status?: number);
  constructor(code?: string, description?: string, status?: number) {
    super();
    this.code = code || '';
    this.description = description || '';
    this.status = status || NaN;
  }
}

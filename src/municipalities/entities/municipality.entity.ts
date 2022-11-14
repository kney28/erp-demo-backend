import { BaseEntity } from '../../base/baseEntity';
import { Column, Entity, Unique, ManyToOne } from 'typeorm';
import { Department } from 'src/departments/entities/department.entity';

@Entity()
@Unique(['code', 'deleted_at'])
export class Municipality extends BaseEntity {
  @Column({ length: 5 })
  code: string;

  @Column()
  subcode: string;

  @Column({ length: 60 })
  description: string;

  @ManyToOne(() => Department, (department: Department) => department)
  public department: Department;

  @Column()
  status: number;

  constructor(
    subcode: string,
    department: Department,
    description?: string,
    status?: number,
  );
  constructor(
    subcode: string,
    department: Department,
    description: string,
    status?: number,
  );
  constructor(
    subcode: string,
    department: Department,
    description: string,
    status: number,
  );
  constructor(
    subcode?: string,
    department?: Department,
    description?: string,
    status?: number,
  );
  constructor(
    subcode?: string,
    department?: Department,
    description?: string,
    status?: number,
  ) {
    super();
    this.subcode = subcode || '';
    this.description = description || '';
    this.department = department || null;
    this.status = status || NaN;
  }
}

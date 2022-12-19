import { Municipality } from 'src/municipalities/entities/municipality.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 2, unique: true })
  codigo: string;

  @Column({ length: 60 })
  descripcion: string;

  @Column('int')
  estado: number;

  @CreateDateColumn()
  fecha: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @OneToMany(() => Municipality, (municipality) => municipality.department)
  municipalities: Municipality[];
}

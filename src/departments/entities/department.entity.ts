import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
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

  @ManyToOne(() => User, (user: User) => user)
  public usuario: User;
}

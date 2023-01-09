import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity } from 'typeorm';

@Entity()
export class MonthlyClosure extends BaseEntity {
  @Column()
  month: string;
}

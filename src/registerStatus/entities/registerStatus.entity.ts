import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity } from 'typeorm';

@Entity()
export class RegisterStatus extends BaseEntity {
  @Column()
  name: string;
}

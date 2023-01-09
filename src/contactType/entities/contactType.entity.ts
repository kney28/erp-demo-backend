import { BaseEntity } from 'src/base/baseEntity';
import { Column, Entity } from 'typeorm';
@Entity()
export class ContactType extends BaseEntity {
  @Column()
  name: string;
}

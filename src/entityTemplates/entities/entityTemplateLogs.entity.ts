import { BaseEntity } from 'src/base/baseEntity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum LogEntityTemplateType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}

@Entity()
export class EntityTemplateLogs extends BaseEntity {
  @Column()
  value: string;

  @Column({
    type: 'enum',
    enum: LogEntityTemplateType,
  })
  type: LogEntityTemplateType;

  @ManyToOne(() => User, (user: User) => user)
  user: User;
}

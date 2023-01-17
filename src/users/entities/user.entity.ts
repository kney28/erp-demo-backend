import { Exclude } from 'class-transformer';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Profile } from 'src/profiles/entities/profile.entity';
import * as bcrypt from 'bcrypt';

export enum ProfilesStatus {
  ACTIVE = 1,
  INACTIVE = 2,
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  salt: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  active: boolean;

  @ManyToOne(() => Profile, (profile) => profile.users, {
    eager: true
  })
  role: Profile;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password) {
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password, salt);
      this.salt = salt;
    }
  }

  @BeforeInsert()
  @BeforeUpdate()
  async lowerCaseUsername() {
    if (this.username) {
      this.username = this.username.toLowerCase();
    }
  }
}

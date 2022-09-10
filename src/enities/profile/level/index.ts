import {
  Entity, PrimaryGeneratedColumn, Column, 
  BaseEntity, OneToOne,
} from 'typeorm';
import { Profile } from 'enities/profile';
  
@Entity()
export class Level extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number;

  @Column('int', { nullable: false, default: 1 })
    value: number;
  
  @Column('int', { nullable: false, default: 0 })
    count: number;

  @Column('int', { nullable: false, default: 20 })
    all: number;

  @OneToOne(() => Profile, (profile) => profile.level)
    profile: Profile;
}
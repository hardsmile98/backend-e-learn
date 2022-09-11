import {
  Entity, PrimaryGeneratedColumn, Column, 
  BaseEntity, OneToOne, JoinColumn,
} from 'typeorm';
import { Profile } from '../profile';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number;

  @Column('varchar', { nullable: false, length: 100 })
    login: string;

  @Column('varchar', { nullable: false, length: 100 })
    name: string;

  @Column('varchar', { nullable: false, length: 100 })
    password: string;

  @Column({ nullable: false })
    profileId: number;

  @OneToOne(() => Profile, {
    eager: true,
  })

  @JoinColumn({name: 'profileId'})
    profile: Profile;
}
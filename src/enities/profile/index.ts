import {
  Entity, PrimaryGeneratedColumn,UpdateDateColumn,
  Column, BaseEntity, OneToOne, JoinColumn,
} from 'typeorm';
import { User } from "../user"
import { Level } from "./level"
import { Visit } from './visit';

@Entity()
export class Profile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @UpdateDateColumn()
  updatedDate: Date;

  @Column('int', { nullable: false, default: 0 })
  balance: number;

  @Column('int', { nullable: false, default: 0 })
  words: number;

  @OneToOne(() => User, (user) => user.profile)
    user: User

  @OneToOne(() => Level, (level) => level.profile)
    @JoinColumn()
    level: Level

  @OneToOne(() => Visit, (visit) => visit.profile)
    @JoinColumn()
    visit: Visit
}
import {
  Entity, PrimaryGeneratedColumn,UpdateDateColumn,
  Column, BaseEntity, OneToOne, JoinColumn,
} from 'typeorm';
import { Level } from "./level";
import { Visit } from './visit';

@Entity()
export class Profile extends BaseEntity {
  @PrimaryGeneratedColumn()
    idProfile: number;

  @UpdateDateColumn()
    updatedDate: Date;

  @Column('int', { nullable: false, default: 0 })
    balance: number;

  @Column('int', { nullable: false, default: 0 })
    words: number;

  @Column({ nullable: false })
    levelId: number;

  @Column({ nullable: false })
    visitId: number;

  @OneToOne(() => Level, {
    eager: true,
  })
  @JoinColumn({name: 'levelId'})
    level: Level;

  @OneToOne(() => Visit, {
    eager: true,
  })
  @JoinColumn({name: 'visitId'})
    visit: Visit;

  constructor() {
    super();
    this.balance = 0;
    this.words = 0;
    this.updatedDate = new Date();
  }
}
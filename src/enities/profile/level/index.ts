import {
  Entity, PrimaryGeneratedColumn,
  Column, BaseEntity,
} from 'typeorm';
  
@Entity()
export class Level extends BaseEntity {
  @PrimaryGeneratedColumn()
    levelId: number;

  @Column('int', { nullable: false, default: 1 })
    value: number;
  
  @Column('int', { nullable: false, default: 0 })
    count: number;

  @Column('int', { nullable: false, default: 20 })
    all: number;

  constructor() {
    super();
    this.value = 1;
    this.count = 0;
    this.all = 20;
  }
}
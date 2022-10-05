import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity,
} from 'typeorm';
  
@Entity()
export class Course extends BaseEntity {
    @PrimaryGeneratedColumn()
      id: number;
  
    @Column('varchar', { nullable: false })
      name: string;
}
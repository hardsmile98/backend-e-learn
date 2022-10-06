import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity,
} from 'typeorm';
    
@Entity()
export class Word extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number;

  @Column('int', { nullable: false })
    courseId: number;
    
  @Column('varchar', { nullable: false })
    word: string;

  @Column('varchar', { nullable: false })
    translate: string;
}
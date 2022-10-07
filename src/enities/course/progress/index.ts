import {
  Entity, Column, BaseEntity, PrimaryGeneratedColumn,
} from 'typeorm';
    
@Entity()
export class Progress extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number;
  
  @Column('int', { nullable: false })
    userId: number;

  @Column('int', { nullable: false })
    courseId: number;

  @Column('int', { nullable: false })
    wordId: number;
}
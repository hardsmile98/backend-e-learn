import {
  Entity, Column, BaseEntity,
} from 'typeorm';
    
@Entity()
export class Progress extends BaseEntity {
  @Column('int', { nullable: false })
    userId: number;

  @Column('int', { nullable: false })
    courseId: number;

  @Column('int', { nullable: false })
    wordId: number;
}
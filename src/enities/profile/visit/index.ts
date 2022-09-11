import {
  Entity, PrimaryGeneratedColumn,
  Column, BaseEntity,
} from 'typeorm';
    
@Entity()
export class Visit extends BaseEntity {
  @PrimaryGeneratedColumn()
    visitId: number;
  
  @Column('boolean', { nullable: false, default: false })
    Mo: boolean;

  @Column('boolean', { nullable: false, default: false })
    Tu: boolean;
  
  @Column('boolean', { nullable: false, default: false })
    We: boolean;
  
  @Column('boolean', { nullable: false, default: false })
    Th: boolean;
  
  @Column('boolean', { nullable: false, default: false })
    Fr: boolean;

  @Column('boolean', { nullable: false, default: false })
    Sa: boolean;
  
  @Column('boolean', { nullable: false, default: false })
    Su: boolean;

  constructor() {
    super();
    this.Mo = false;
    this.Th = false;
    this.Th = false;
    this.We = false;
    this.Fr = false;
    this.Sa = false;
    this.Su = false;
  }
}
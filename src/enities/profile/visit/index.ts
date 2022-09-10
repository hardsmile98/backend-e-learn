import {
  Entity, PrimaryGeneratedColumn, Column, 
  BaseEntity, OneToOne,
} from 'typeorm';
import { Profile } from 'enities/profile';
    
@Entity()
export class Visit extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number;
  
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
  
  @OneToOne(() => Profile, (profile) => profile.visit)
    profile: Profile;
}
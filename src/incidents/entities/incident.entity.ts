import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { User } from '../../users/entities/user.entity';

@Entity('incidents')
export class Incident {
  @PrimaryGeneratedColumn()
  IncidentID: number;

  @ManyToOne(() => User, (user) => user.incidents)
  @JoinColumn({ name: 'ReportedByUserID' })
  ReportedByUser: User;
}

import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { User } from '../../users/entities/user.entity';

@Entity('incident_assignments')
export class IncidentAssignment {
  @PrimaryGeneratedColumn()
  AssignmentID: number;

  @ManyToOne(() => User, (user) => user.assignmentsMade)
  @JoinColumn({ name: 'AssignedByUserID' })
  AssignedByUser: User;
}

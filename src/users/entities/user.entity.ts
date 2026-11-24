import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

import { Incident } from '../../incidents/entities/incident.entity';
import { IncidentAssignment } from '../../incidents/entities/incident-assignment.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  UserID: number;

  @Column({ type: 'varchar', length: 50 })
  FirstName: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  MiddleName: string | null;

  @Column({ type: 'varchar', length: 50 })
  LastName: string;

  @Column({ type: 'varchar', length: 150, unique: true })
  Email: string;

  @Column({ type: 'varchar', length: 255 })
  PasswordHash: string;

  @Column({ type: 'varchar', length: 30 })
  Role: string;

  @CreateDateColumn()
  CreatedAt: Date;

  @OneToMany(() => Incident, (incident) => incident.ReportedByUser)
  incidents: Incident[];

  @OneToMany(
    () => IncidentAssignment,
    (assignment) => assignment.AssignedByUser,
  )
  assignmentsMade: IncidentAssignment[];
}

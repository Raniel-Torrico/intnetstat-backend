import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Technician } from '../../technicians/entities/technician.entity';
import { Incident } from './incident.entity';

@Entity('incident_assignments')
export class IncidentAssignment {
  @PrimaryGeneratedColumn()
  AssignmentID: number;

  @Column({ type: 'int' })
  IncidentID: number;

  @Column({ type: 'int' })
  TechnicianID: number;

  @Column({ type: 'int' })
  AssignedByUserID: number;

  @CreateDateColumn()
  AssignedAt: Date;

  @Column({ type: 'varchar', length: 30, default: 'Assigned' })
  AssignmentStatus: string;

  @ManyToOne(() => Incident, (i) => i.assignments)
  @JoinColumn({ name: 'IncidentID' })
  Incident: Incident;

  @ManyToOne(() => Technician, (t) => t.assignments)
  @JoinColumn({ name: 'TechnicianID' })
  Technician: Technician;

  @ManyToOne(() => User, (u) => u.assignmentsMade)
  @JoinColumn({ name: 'AssignedByUserID' })
  AssignedByUser: User;
}
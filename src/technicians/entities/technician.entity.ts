
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';

import { IncidentAssignment } from '../../incidents/entities/incident-assignment.entity';
import { IncidentResolution } from '../../incidents/entities/incident-resolution.entity';

@Entity('technicians')
export class Technician {
  @PrimaryGeneratedColumn()
  TechnicianID: number;

  @Column({ type: 'varchar', length: 50 })
  FirstName: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  MiddleName: string | null;

  @Column({ type: 'varchar', length: 50 })
  LastName: string;

  @Column({ type: 'varchar', length: 20 })
  Phone: string;

  @Column({ type: 'varchar', length: 150, unique: true })
  Email: string;

  @Column({ type: 'varchar', length: 20 })
  AvailabilityStatus: string;

  @OneToMany(() => IncidentAssignment, (a) => a.Technician)
  assignments: IncidentAssignment[];

  @OneToMany(() => IncidentResolution, (r) => r.ResolvedByTechnician)
  resolutions: IncidentResolution[];
}

import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Technician } from '../../technicians/entities/technician.entity';

@Entity('incident_resolutions')
export class IncidentResolution {
  @PrimaryGeneratedColumn()
  ResolutionID: number;

  @ManyToOne(() => Technician, (t) => t.resolutions)
  @JoinColumn({ name: 'ResolvedByTechnicianID' })
  ResolvedByTechnician: Technician;
}

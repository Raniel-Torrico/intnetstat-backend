import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Technician } from '../../technicians/entities/technician.entity';
import { Incident } from './incident.entity';

@Entity('incident_resolutions')
export class IncidentResolution {
  @PrimaryGeneratedColumn()
  ResolutionID: number;

  @Column({ type: 'int', unique: true })
  IncidentID: number;

  @Column({ type: 'int' })
  ResolvedByTechnicianID: number;

  @Column({ type: 'text' })
  ResolutionNotes: string;

  @Column({ type: 'datetime' })
  ResolvedAt: Date;

  @OneToOne(() => Incident, (i) => i.resolution)
  @JoinColumn({ name: 'IncidentID' })
  Incident: Incident;

  @ManyToOne(() => Technician, (t) => t.resolutions)
  @JoinColumn({ name: 'ResolvedByTechnicianID' })
  ResolvedByTechnician: Technician;
}
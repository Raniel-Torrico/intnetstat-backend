import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany,
  JoinColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Location } from '../../locations/entities/location.entity';
import { IncidentCategory } from '../../incident-categories/entities/incident-category.entity';
import { IncidentAssignment } from './incident-assignment.entity';
import { IncidentResolution } from './incident-resolution.entity';

@Entity('incidents')
export class Incident {
  @PrimaryGeneratedColumn()
  IncidentID: number;

  @Column({ type: 'int' })
  ReportedByUserID: number;

  @Column({ type: 'int' })
  LocationID: number;

  @Column({ type: 'int' })
  CategoryID: number;

  @Column({ type: 'varchar', length: 150 })
  Title: string;

  @Column({ type: 'text' })
  Description: string;

  @Column({ type: 'varchar', length: 30, default: 'Open' })
  Status: string;

  @Column({ type: 'varchar', length: 20, default: 'Medium' })
  Priority: string;

  @CreateDateColumn()
  DateReported: Date;

  @UpdateDateColumn()
  DateUpdated: Date;

  @ManyToOne(() => User, (u) => u.incidents)
  @JoinColumn({ name: 'ReportedByUserID' })
  ReportedByUser: User;

  @ManyToOne(() => Location, (l) => l.incidents)
  @JoinColumn({ name: 'LocationID' })
  Location: Location;

  @ManyToOne(() => IncidentCategory, (c) => c.incidents)
  @JoinColumn({ name: 'CategoryID' })
  Category: IncidentCategory;

  @OneToMany(() => IncidentAssignment, (a) => a.Incident)
  assignments: IncidentAssignment[];

  @OneToMany(() => IncidentResolution, (r) => r.Incident)
  resolution: IncidentResolution[];
}
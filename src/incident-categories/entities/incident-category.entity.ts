import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Incident } from '../../incidents/entities/incident.entity';

@Entity('incident_categories')
export class IncidentCategory {
  @PrimaryGeneratedColumn()
  CategoryID: number;

  @Column({ type: 'varchar', length: 80, unique: true })
  CategoryName: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  Description: string | null;

  @OneToMany(() => Incident, (i) => i.Category)
  incidents: Incident[];
}
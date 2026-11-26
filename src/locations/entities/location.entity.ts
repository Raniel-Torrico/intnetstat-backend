import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Incident } from '../../incidents/entities/incident.entity';

@Entity('locations')
export class Location {
  @PrimaryGeneratedColumn()
  LocationID: number;

  @Column({ type: 'varchar', length: 100 })
  LocationName: string;

  @Column({ type: 'varchar', length: 255 })
  Address: string;

  @Column({ type: 'varchar', length: 100 })
  City: string;

  @OneToMany(() => Incident, (i) => i.Location)
  incidents: Incident[];
}
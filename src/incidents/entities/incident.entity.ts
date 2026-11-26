import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Location } from '../../locations/entities/location.entity';
import { IncidentCategory } from '../../incident-categories/entities/incident-category.entity';

@Entity('incidents')
export class Incident {
  @PrimaryGeneratedColumn()
  IncidentID: number;

  @ManyToOne(() => User, (user) => user.incidents)
  @JoinColumn({ name: 'ReportedByUserID' })
  ReportedByUser: User;

  @ManyToOne(() => Location, (loc) => loc.incidents)
  @JoinColumn({ name: 'LocationID' })
  Location: Location;

  @ManyToOne(() => IncidentCategory, (cat) => cat.incidents)
  @JoinColumn({ name: 'CategoryID' })
  Category: IncidentCategory;
}
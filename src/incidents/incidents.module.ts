import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Incident } from './entities/incident.entity';
import { IncidentAssignment } from './entities/incident-assignment.entity';
import { IncidentResolution } from './entities/incident-resolution.entity';
import { IncidentsService } from './incidents.service';
import { IncidentsController } from './incidents.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Incident, IncidentAssignment, IncidentResolution])],
  controllers: [IncidentsController],
  providers: [IncidentsService],
  exports: [TypeOrmModule],
})
export class IncidentsModule {}
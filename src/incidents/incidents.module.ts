
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IncidentAssignment } from './entities/incident-assignment.entity';
import { IncidentResolution } from './entities/incident-resolution.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      IncidentAssignment,
      IncidentResolution,
    ]),
  ],
})
export class IncidentsModule {}

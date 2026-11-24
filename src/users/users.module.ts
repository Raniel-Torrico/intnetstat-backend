import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entities/user.entity';
import { Incident } from '../incidents/entities/incident.entity';
import { IncidentAssignment } from '../incidents/entities/incident-assignment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Incident,
      IncidentAssignment,
    ]),
  ],
  exports: [TypeOrmModule],
})
export class UsersModule {}

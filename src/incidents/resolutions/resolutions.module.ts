import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncidentResolution } from '../entities/incident-resolution.entity';
import { ResolutionsService } from './resolutions.service';
import { ResolutionsController } from './resolutions.controller';

@Module({
  imports: [TypeOrmModule.forFeature([IncidentResolution])],
  controllers: [ResolutionsController],
  providers: [ResolutionsService],
})
export class ResolutionsModule {}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncidentCategory } from './entities/incident-category.entity';
import { IncidentCategoriesService } from './incident-categories.service';
import { IncidentCategoriesController } from './incident-categories.controller';

@Module({
  imports: [TypeOrmModule.forFeature([IncidentCategory])],
  controllers: [IncidentCategoriesController],
  providers: [IncidentCategoriesService],
})
export class IncidentCategoriesModule {}
import { PartialType } from '@nestjs/mapped-types';
import { CreateIncidentCategoryDto } from './create-incident-category.dto';

export class UpdateIncidentCategoryDto extends PartialType(CreateIncidentCategoryDto) {}
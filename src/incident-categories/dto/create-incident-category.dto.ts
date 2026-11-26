import { IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

export class CreateIncidentCategoryDto {
  @IsNotEmpty() @MaxLength(80)
  CategoryName: string;

  @IsOptional() @MaxLength(255)
  Description?: string;
}
import { IsIn, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateIncidentDto {
  @IsInt()
  ReportedByUserID: number;

  @IsInt()
  LocationID: number;

  @IsInt()
  CategoryID: number;

  @IsNotEmpty() @MaxLength(150)
  Title: string;

  @IsNotEmpty() @IsString()
  Description: string;

  @IsOptional() @IsIn(['Open', 'In Progress', 'Resolved', 'Closed'])
  Status?: string;

  @IsOptional() @IsIn(['Low', 'Medium', 'High', 'Critical'])
  Priority?: string;
}
import { IsIn, IsInt, IsOptional } from 'class-validator';

export class CreateAssignmentDto {
  @IsInt()
  IncidentID: number;

  @IsInt()
  TechnicianID: number;

  @IsInt()
  AssignedByUserID: number;

  @IsOptional() @IsIn(['Assigned', 'In Progress', 'Completed', 'Reassigned'])
  AssignmentStatus?: string;
}
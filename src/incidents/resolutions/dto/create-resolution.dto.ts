import { IsDateString, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateResolutionDto {
  @IsInt()
  IncidentID: number;

  @IsInt()
  ResolvedByTechnicianID: number;

  @IsNotEmpty() @IsString()
  ResolutionNotes: string;

  @IsDateString()
  ResolvedAt: string;
}

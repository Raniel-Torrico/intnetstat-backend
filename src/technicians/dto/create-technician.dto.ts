
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateTechnicianDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  FirstName: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  MiddleName?: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  LastName: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  Phone: string;

  @IsEmail()
  @MaxLength(150)
  Email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  AvailabilityStatus: string;
}

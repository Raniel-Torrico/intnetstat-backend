import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateLocationDto {
  @IsNotEmpty() @MaxLength(100)
  LocationName: string;

  @IsNotEmpty() @MaxLength(255)
  Address: string;

  @IsNotEmpty() @MaxLength(100)
  City: string;
}
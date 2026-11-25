import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @MaxLength(50)
  FirstName: string;

  @IsOptional()
  @MaxLength(50)
  MiddleName?: string;

  @IsNotEmpty()
  @MaxLength(50)
  LastName: string;

  @IsEmail()
  @MaxLength(150)
  Email: string;

  @IsString()
  @MinLength(6)
  Password: string;

  @IsNotEmpty()
  @MaxLength(30)
  Role: string;
}
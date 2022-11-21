import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDTO {

  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsEmail(undefined, { message: 'Email is required' })
  email: string;

  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password: string;
}
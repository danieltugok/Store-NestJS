import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { UniqueEmail } from "../validation/unique-email.validator";

export class UpdateUserDTO {

  @IsNotEmpty({ message: 'Name is required' })
  @IsOptional()
  name: string;

  @IsEmail(undefined, { message: 'Email is required' })
  @UniqueEmail({ message: 'Email already exists' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'Password must be at least 6 characters' })
  @IsOptional()
  password: string;
}
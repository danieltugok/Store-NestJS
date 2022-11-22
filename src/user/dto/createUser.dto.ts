import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { UniqueEmail } from "../validation/unique-email.validator";

export class CreateUserDTO {

  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsEmail(undefined, { message: 'Email is required' })
  @UniqueEmail({ message: 'Email already exists' })
  email: string;

  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password: string;
}
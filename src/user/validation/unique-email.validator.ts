import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UserRepository } from "../user.repository";

@Injectable()
@ValidatorConstraint({async: true })
export class UniqueEmailValidator implements ValidatorConstraintInterface {

  constructor(private userRepository: UserRepository) {}

  async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
    const userExist = await this.userRepository.findByEmail(value);
    return !userExist;
  }
}

export const UniqueEmail = (optionsValidator: ValidationOptions) => {
  return (objeto: Object, prop: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: prop,
      options: optionsValidator,
      constraints: [],
      validator: UniqueEmailValidator
    })
  };
}

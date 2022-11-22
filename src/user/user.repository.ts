import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserRepository{
  private user: UserEntity[] = [];

  async save(user: UserEntity) {
    this.user.push(user);
  }

  async list() {
    return this.user;
  }

  async findByEmail(email: string) {
    const potentialUser = this.user.find(user => user.email === email);
    return potentialUser !== undefined;
  }
}
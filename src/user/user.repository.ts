import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository{
  private user = [];

  async save(user) {
    this.user.push(user);
  }

  async list() {
    return this.user;
  }
}
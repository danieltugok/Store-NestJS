import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository{
  private user = [];

  save(user) {
    this.user.push(user);
  }

  list() {
    return this.user;
  }
}
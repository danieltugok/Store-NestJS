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

  private findById(id: string) {
    const user = this.user.find(user => user.id === id);
    if (!user) throw new Error('User not found');
    return user;
  }

  async update(id: string, updateData: Partial<UserEntity>) {
    const user = this.findById(id);
    Object.entries(updateData).forEach(([key, value]) => {
      if(key === 'id') return;
      user[key] = value;
    })

    return user;
  }

  async delete(id: string) {
    const user = this.findById(id);
    this.user = this.user.filter(u => u.id !== id);
    return user;

  }
}
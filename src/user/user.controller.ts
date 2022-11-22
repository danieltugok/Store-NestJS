import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/createUser.dto";
import { UserEntity } from "./user.entity";
import { UserRepository } from './user.repository';
import { v4 as uuid } from 'uuid'
import { ListUserDTO } from "./dto/listUser.dto";
import { UpdateUserDTO } from "./dto/updateUser.dto";
@Controller('/usuarios')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async criaUsuario(@Body() dadosDoUsuario: CreateUserDTO) {
    const userEntity = new UserEntity();
    userEntity.email = dadosDoUsuario.email;
    userEntity.name = dadosDoUsuario.name;
    userEntity.password = dadosDoUsuario.password;
    userEntity.id = uuid();

    this.userRepository.save(userEntity);
    
    return {
      user: new ListUserDTO(userEntity.id, userEntity.name),
      message: 'User created successfully',
    };
  }

  @Get()
  async listaUsuarios() {
    const users = await this.userRepository.list();
    return users.map(user => new ListUserDTO(user.id, user.name));
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() updateData: UpdateUserDTO) {
    const user = await this.userRepository.update(id, updateData);

    return {
      user,
      message: 'User updated successfully',
    }
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    const deletedUser = await this.userRepository.delete(id);

    return {
      user: deletedUser,
      message: 'User deleted successfully',
    }
  }
  
}
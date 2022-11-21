import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDTO } from "./dto/createUser.dto";
import { UserRepository } from './user.repository';

@Controller('/usuarios')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async criaUsuario(@Body() dadosDoUsuario: CreateUserDTO) {
    this.userRepository.save(dadosDoUsuario);
    return dadosDoUsuario;
  }

  @Get()
  async listaUsuarios() {
    return this.userRepository.list();
  }
  
}
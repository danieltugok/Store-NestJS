import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDTO } from "./dto/createUser.dto";
import { UserRepository } from './user.repository';
@Controller('/usuarios')
export class UserController {

  constructor(private usuarioRepository: UserRepository) {}

  private UserRepository = new UserRepository();

  @Post()
  async criaUsuario(@Body() dadosDoUsuario: CreateUserDTO) {
    this.UserRepository.save(dadosDoUsuario);
    return dadosDoUsuario;
  }

  @Get()
  async listaUsuarios() {
    return this.UserRepository.list();
  }
  
}
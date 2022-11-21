import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserRepository } from './user.repository';
@Controller('/usuarios')
export class UserController {

  constructor(private usuarioRepository: UserRepository) {}

  private UserRepository = new UserRepository();

  @Post()
  async criaUsuario(@Body() dadosDoUsuario: any) {
    this.UserRepository.save(dadosDoUsuario);
    return dadosDoUsuario;
  }

  @Get()
  async listaUsuarios() {
    return this.UserRepository.list();
  }
  
}
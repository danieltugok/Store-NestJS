import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./user.repository";
@Controller('/usuarios')
export class UserController {

  private usuarioRepository = new UsuarioRepository();

  @Post()
  async criaUsuario(@Body() dadosDoUsuario: any) {
    this.usuarioRepository.save(dadosDoUsuario);
    return dadosDoUsuario;
  }

  @Get()
  async listaUsuarios() {
    return this.usuarioRepository.list();
  }
  
}
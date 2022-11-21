export class UsuarioRepository{
  private usuarios = [];

  save(user) {
    this.usuarios.push(user);
    console.log(this.usuarios);
  }
}
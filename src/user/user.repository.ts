export class UsuarioRepository{
  private usuarios = [];

  save(user) {
    this.usuarios.push(user);
  }

  list() {
    return this.usuarios;
  }
}
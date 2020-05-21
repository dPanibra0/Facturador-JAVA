export class Usuario {
  public idusuario: number;
  public nombre: string;
  public pass: string;
  public tipo: number;
  public usuario: string;
  public estado: number;

  constructor(
    idusuario: number,
    nombre: string,
    pass: string,
    tipo: number,
    usuario: string,
    estado: number
  ) {
    this.idusuario = idusuario;
    this.nombre = nombre;
    this.pass = pass;
    this.tipo = tipo;
    this.usuario = usuario;
    this.estado = estado;
  }
}

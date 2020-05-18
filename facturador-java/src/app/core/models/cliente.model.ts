export class Cliente {
  public correo: string;
  public direccion: string;
  public estado: number;
  public idcliente: number;
  public nombre: string;
  public nrodoc: string;
  public telefono: string;
  public tipodoc: string;

  constructor(
    idcliente: number,
    nombre: string,
    correo: string,
    telefono: string,
    direccion: string,
    estado: number,
    tipodoc: string,
    nrodoc: string
  ) {
    this.correo = correo;
    this.direccion = direccion;
    this.estado = estado;
    this.idcliente = idcliente;
    this.nombre = nombre;
    this.nrodoc = nrodoc;
    this.telefono = telefono;
    this.tipodoc = tipodoc;
  }
  // GET
}

export class Cliente {
  private correo: string;
  private direccion: string;
  private estado: number;
  private idcliente: number;
  private nombre: string;
  private nrodoc: string;
  private telefono: string;
  private tipodoc: string;
 
  constructor(
    idcliente: number,
    nombre: string,
    correo: string,
    telefono: string,
    direccion: string,
    estado: number,
    tipodoc: string,
    nrodoc: string,
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
  public get $correo(): string {
    return this.correo;
  }
  public get $direccion(): string {
    return this.direccion;
  }
  public get $estado(): number {
    return this.estado;
  }
  public get $idcliente(): number {
    return this.idcliente;
  }
  public get $nombre(): string {
    return this.nombre;
  }
  public get $nrodoc(): string {
    return this.nrodoc;
  }
  public get $telefono(): string {
    return this.telefono;
  }
  public get $tipodoc(): string {
    return this.tipodoc;
  }

  //   SET
  public set $correo(value: string) {
    this.correo = value;
  }
  public set $direccion(value: string) {
    this.direccion = value;
  }
  public set $estado(value: number) {
    this.estado = value;
  }
  public set $idcliente(value: number) {
    this.idcliente = value;
  }
  public set $nombre(value: string) {
    this.nombre = value;
  }
  public set $nrodoc(value: string) {
    this.nrodoc = value;
  }
  public set $telefono(value: string) {
    this.telefono = value;
  }
  public set $tipodoc(value: string) {
    this.tipodoc = value;
  }
}

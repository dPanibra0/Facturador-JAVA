export class VentaDetalle {
  public cantidad: number;
  public codproducto: number;
  public descindiv: number;
  public desctotal: number;
  public ganancia: number;
  public idventadetalle: number;
  public prevesdind: number;
  public prevesdtot: number;
  public subtotal: number;
  public umedidausada: string;
  constructor(
    cantidad: number,
    codproducto: number,
    descindiv: number,
    desctotal: number,
    ganancia: number,
    idventadetalle: number,
    prevesdind: number,
    prevesdtot: number,
    subtotal: number,
    umedidausada: string
  ) {
    this.cantidad = cantidad;
    this.codproducto = codproducto;
    this.descindiv = descindiv;
    this.desctotal = desctotal;
    this.ganancia = ganancia;
    this.idventadetalle = idventadetalle;
    this.prevesdind = prevesdind;
    this.prevesdtot = prevesdtot;
    this.subtotal = subtotal;
    this.umedidausada = umedidausada;
  }
}

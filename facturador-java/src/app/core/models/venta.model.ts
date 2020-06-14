import { VentaDetalle } from './ventaDetalle.model';
export class Venta {
  public codventa: number;
  public descuento: number;
  public estado: number;
  public fecha: string;
  public ganancia: number;
  public idcliente: number;
  public idusuario: number;
  public metpago1: number;
  public metpago2: number;
  public montpago1: number;
  public montpago2: number;
  public nota: string;
  public saldo: number;
  public totcompra: number;
  public totventa: number;
  public ventadetalle: Array<VentaDetalle>;

  constructor(
    codventa: number,
    descuento: number,
    estado: number,
    fecha: string,
    ganancia: number,
    idcliente: number,
    idusuario: number,
    metpago1: number,
    metpago2: number,
    montpago1: number,
    montpago2: number,
    nota: string,
    saldo: number,
    totcompra: number,
    totventa: number,
    ventadetalle: Array<VentaDetalle>
  ) {
    this.codventa = codventa;
    this.descuento = descuento;
    this.estado = estado;
    this.fecha = fecha;
    this.ganancia = ganancia;
    this.idcliente = idcliente;
    this.idusuario = idusuario;
    this.metpago1 = metpago1;
    this.metpago2 = metpago2;
    this.montpago1 = montpago1;
    this.montpago2 = montpago2;
    this.nota = nota;
    this.saldo = saldo;
    this.totcompra = totcompra;
    this.totventa = totventa;
    this.ventadetalle = ventadetalle;
  }
}

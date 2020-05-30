import { CompraDetalle } from './compradetalle.model';
export class Compra {
  compradetalle: Array<CompraDetalle>;
  fechaemision: string;
  fechavencimiento: string;
  idcompra: number;
  iddistrib: number;
  idusuario: number;
  metpago: string;
  moneda: string;
  nota: string;
  nroserie: string;
  pagado: number;
  saldo: number;
  serie: string;
  tc: string;
  tipcomprobante: string;
  tot: number;
  constructor(
    compradetalle: Array<CompraDetalle>,
    fechaemision: string,
    fechavencimiento: string,
    idcompra: number,
    iddistrib: number,
    idusuario: number,
    metpago: string,
    moneda: string,
    nota: string,
    nroserie: string,
    pagado: number,
    saldo: number,
    serie: string,
    tc: string,
    tipcomprobante: string,
    tot: number
  ) {
    this.compradetalle = compradetalle;
    this.fechaemision = fechaemision;
    this.fechavencimiento = fechavencimiento;
    this.idcompra = idcompra;
    this.iddistrib = iddistrib;
    this.idusuario = idusuario;
    this.metpago = metpago;
    this.moneda = moneda;
    this.nota = nota;
    this.nroserie = nroserie;
    this.pagado = pagado;
    this.saldo = saldo;
    this.serie = serie;
    this.tc = tc;
    this.tipcomprobante = tipcomprobante;
    this.tot = tot;
  }
}

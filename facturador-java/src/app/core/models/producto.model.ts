export class Producto {
  codproducto: number;
  almacen: string;
  cantidad: number;
  cantmin: number;
  cantp1: number;
  cantp2: number;
  categoria: string;
  codbarra: string;
  color: string;
  detalles: string;
  estado: number;
  fechavenc: string;
  iddistrib: number;
  laboratorio: string;
  lote: string;
  marca: string;
  precioco: number;
  preciove: number;
  prep1: number;
  prep2: number;
  producto: string;
  promo1: string;
  promo2: string;
  ptjganancia: number;
  unimedida: string;

  constructor(
    codproducto: number,
    almacen: string,
    cantidad: number,
    cantmin: number,
    cantp1: number,
    cantp2: number,
    categoria: string,
    codbarra: string,
    color: string,
    detalles: string,
    estado: number,
    fechavenc: string,
    iddistrib: number,
    laboratorio: string,
    lote: string,
    marca: string,
    precioco: number,
    preciove: number,
    prep1: number,
    prep2: number,
    producto: string,
    promo1: string,
    promo2: string,
    ptjganancia: number,
    unimedida: string
  ) {
    this.codproducto = codproducto;
    this.almacen = almacen;
    this.cantidad = cantidad;
    this.cantmin = cantmin;
    this.cantp1 = cantp1;
    this.cantp2 = cantp2;
    this.categoria = categoria;
    this.codbarra = codbarra;
    this.color = color;
    this.detalles = detalles;
    this.estado = estado;
    this.fechavenc = fechavenc;
    this.iddistrib = iddistrib;
    this.laboratorio = laboratorio;
    this.lote = lote;
    this.marca = marca;
    this.precioco = precioco;
    this.preciove = preciove;
    this.prep1 = prep1;
    this.prep2 = prep2;
    this.producto = producto;
    this.promo1 = promo1;
    this.promo2 = promo2;
    this.ptjganancia = ptjganancia;
    this.unimedida = unimedida;
  }
}

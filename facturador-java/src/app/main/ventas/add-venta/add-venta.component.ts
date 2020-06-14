import { Component, OnInit, ViewChild } from '@angular/core';
import { Producto } from '@models/producto.model';
import { ProductoService } from '@services/producto.service';
import { Venta } from '@models/venta.model';
import { VentaDetalle } from '@models/ventaDetalle.model';
import { ClienteService } from '@services/cliente.service';
import { Cliente } from '@models/Cliente.model';
import { FormControl } from '@angular/forms';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from './../../components/product-dialog/product-dialog.component';
import { element } from 'protractor';

export class ProductoCompra {
  constructor(
    public id: number,
    public cantidad: number,
    public producto: string,
    public detalle: string,
    public stock: number,
    public precio: number,
    public subTotal: number = cantidad * precio
  ) {}
}
@Component({
  selector: 'app-add-venta',
  templateUrl: './add-venta.component.html',
  styleUrls: ['./add-venta.component.scss'],
})
export class AddVentaComponent implements OnInit {
  nVentaDetalle: Array<VentaDetalle>;
  nVenta = new Venta(
    0,
    0,
    1,
    '',
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    '',
    0,
    0,
    0,
    this.nVentaDetalle
  );
  // Tabla de productos
  displayedColumns: string[] = [
    'cantidad',
    'producto',
    'stock',
    'precio',
    'subTotal',
    'delete',
  ];
  dataSource: MatTableDataSource<ProductoCompra>;
  listaProductosTabla: ProductoCompra[] = [];

  // datos de formulario
  tiposComprobantes: string[] = [
    'Nota de Compra',
    'Boleta de Venta',
    'Factura',
    'Recibo por Honorarios',
    'Ticket',
  ];
  favoriteSeason: string;
  seasons: string[] = ['Efectivo', 'Tarjeta'];
  total: number = 0;
  // datos externos
  clientes: Array<Cliente>;
  loadDist = false;
  productos: Array<any>;
  loadProduct = false;
  //Selector
  listaProductosSelector: Array<any>;
  // buscar Producto
  nombresProductos: Array<String>;
  productsControl = new FormControl();
  listTransicion: Producto[];
  listaProductsTabla;
  @ViewChild(MatTable) tabla1: MatTable<ProductoCompra>;

  constructor(
    private _sCliente: ClienteService,
    private _sProducto: ProductoService,
    public _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.nVenta.ventadetalle;
    // this.dataSource = new MatTableDataSource(this.listaProductos);
    this._sCliente.getClientes().subscribe(
      (data: Array<Cliente>) => {
        this.clientes = data;
        this.loadDist = true;
        console.log(data);
      },
      (error) => {}
    );
    this._sProducto.getProductos().subscribe(
      (data: Array<Producto>) => {
        this.addVisible(data);
        this.productos = data;
        this.loadProduct = true;
        console.log(data);
      },
      (error) => {}
    );
  }

  select(valor) {
    this.nombresProductos = [];
    this.listTransicion = [];
    valor.forEach((element) => {
      var listofProduct: Producto[] = this.productos.filter(
        (producto) => producto.codproducto == element
      );
      this.listTransicion.push(listofProduct[0]);
      this.nombresProductos.push(listofProduct[0].producto);
    });
  }

  addToList() {
    this.productsControl.setValue([]);
    this.listTransicion.forEach((element: Producto) => {
      this.productos.forEach((elem) => {
        if (elem.codproducto == element.codproducto) {
          elem.visible = false;
          return;
        }
      });
      let productin = new ProductoCompra(
        element.codproducto,
        1,
        element.producto,
        element.detalles,
        element.cantidad,
        element.precioco
      );
      this.listaProductosTabla.push(productin);
    });

    this.tabla1.renderRows();
    this.nombresProductos = [];
    this.listTransicion = [];
    this.getTotalCost();
  }
  getTotalCost() {
    this.total = 0;
    this.listaProductosTabla.map((t) => (this.total += t.subTotal));
    this.total = parseFloat(this.intlRound(this.total));
    this.nVenta;
  }
  somethingChanged(id) {
    this.listaProductosTabla.filter((producto) => {
      if (producto.id == id) {
        producto.subTotal = producto.cantidad * producto.precio;
        producto.subTotal = parseFloat(this.intlRound(producto.subTotal));
      }
    })[0];
    this.getTotalCost();
  }
  addVisible(listaProductos: Array<Producto>) {
    listaProductos.forEach((element) => {
      Object.defineProperty(element, 'visible', {
        value: true,
        writable: true,
        enumerable: true,
        configurable: true,
      });
    });
  }
  quitarProduct(id) {
    let cont = 0;
    for (let el of this.listaProductosTabla) {
      if (el.id === id) {
        this.listaProductosTabla.splice(cont, 1);
        this.tabla1.renderRows();
        for (let i of this.productos) {
          if (i.codproducto == el.id) {
            i.visible = true;
            break;
          }
        }
        break;
      }
      cont++;
    }
    this.getTotalCost();
  }
  onSubmit() {
    console.log(this.nVenta);
  }
  addSaldo() {
    this.nVenta.saldo = this.nVenta.montpago1 + this.nVenta.montpago2;
  }
  intlRound(numero, decimales = 2, usarComa = false) {
    let opciones = {
      maximumFractionDigits: decimales,
      useGrouping: false,
    };
    return new Intl.NumberFormat(usarComa ? 'es' : 'en', opciones).format(
      numero
    );
  }
  deleteList() {
    this.listaProductosTabla = [];
    this.productos.forEach((element) => {
      element.visible = true;
    });
    this.getTotalCost();
  }
  openDialog(id) {
    console.log(id);
    let producto = this.productos.filter((element) =>  element.codproducto == id)[0];
    console.log(producto);
    
    const dialogRef = this._dialog.open(ProductDialogComponent, {
      width: '500px',
      data: { producto:producto },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        console.log('gaaaaaaaa');
      }
    });
  }
}

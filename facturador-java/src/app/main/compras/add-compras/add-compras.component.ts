import { Component, OnInit, ViewChild } from '@angular/core';
import { CompraDetalle } from '@models/compradetalle.model';
import { Producto } from '@models/producto.model';
import { ProductoService } from '@services/producto.service';
import { DistribuidorService } from '@services/distribuidor.service';
import { Distribuidor } from '@models/distribuidor.model';
import { FormControl } from '@angular/forms';
import { MatTableDataSource, MatTable } from '@angular/material/table';
export class ProductoCompra {
  constructor(
    public id: number,
    public cantidad: number,
    public producto: string,
    public detalle: string,
    public precio: number,
    public subTotal: number = cantidad * precio
  ) {}
}
@Component({
  selector: 'app-add-compras',
  templateUrl: './add-compras.component.html',
  styleUrls: ['./add-compras.component.scss'],
})
export class AddComprasComponent implements OnInit {
  // Tabla de productos
  displayedColumns: string[] = ['cantidad', 'producto', 'precio', 'subTotal'];
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
  distribuidores: Array<Distribuidor>;
  loadDist = false;
  productos: Array<Producto>;
  loadProduct = false;
  // buscar Producto
  nombresProductos: Array<String>;
  productsControl = new FormControl();
  listTransicion: Producto[];
  listaProductsTabla;
  @ViewChild(MatTable) tabla1: MatTable<ProductoCompra>;

  constructor(
    private _sDistribuidor: DistribuidorService,
    private _sProducto: ProductoService
  ) {}

  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource(this.listaProductos);
    this._sDistribuidor.getDistribuidores().subscribe(
      (data: Array<Distribuidor>) => {
        this.distribuidores = data;
        this.loadDist = true;
        console.log(data);
      },
      (error) => {}
    );
    this._sProducto.getProductos().subscribe(
      (data: Array<Producto>) => {
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
      let productin = new ProductoCompra(
        element.codproducto,
        1,
        element.producto,
        element.detalles,
        element.precioco
      );
      this.listaProductosTabla.push(productin);
    });
    this.tabla1.renderRows();
    this.nombresProductos = [];
    this.listTransicion = [];
    console.log(this.listaProductosTabla);
    this.getTotalCost();
  }
  getTotalCost() {
    this.total = 0;
    this.listaProductosTabla.map((t) => (this.total += t.subTotal));
  }
  somethingChanged(id) {
    this.listaProductosTabla.filter((producto) => {
      if (producto.id == id) {
        producto.subTotal = producto.cantidad * producto.precio;
      }
    })[0];
    this.getTotalCost();
  }
}

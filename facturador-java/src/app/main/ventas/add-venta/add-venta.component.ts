import { Component, OnInit, ViewChild } from "@angular/core";
import { Producto } from "@models/producto.model";
import { ProductoService } from "@services/producto.service";

import { Venta } from "@models/venta.model";
import { VentasService } from "@services/venta.service";
import { VentaDetalle } from "@models/ventaDetalle.model";

import { ClienteService } from "@services/cliente.service";
import { Cliente } from "@models/cliente.model";

import { FormControl } from "@angular/forms";
import { MatTableDataSource, MatTable } from "@angular/material/table";
import { MatDialog } from "@angular/material/dialog";
import { ProductDialogComponent } from "./../../components/product-dialog/product-dialog.component";

import * as moment from "moment";
@Component({
  selector: "app-add-venta",
  templateUrl: "./add-venta.component.html",
  styleUrls: ["./add-venta.component.scss"],
})
export class AddVentaComponent implements OnInit {
  nVentaDetalle: VentaDetalle[] = [];
  nVenta = new Venta(0,0,1,"",0,0,0,0,0,0,0,"",0,0,0,this.nVentaDetalle);
  // Tabla de productos
  displayedColumns: string[] = [
    "cantidad",
    "producto",
    "stock",
    "precio",
    "descTotal",
    "subTotal",
    "delete",
  ];
  dataSource: MatTableDataSource<VentaDetalle>;
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

  fecha = moment(new Date()).format("DD/MM/YYYY");
  @ViewChild(MatTable) tabla1: MatTable<VentaDetalle>;

  constructor(
    private _sCliente: ClienteService,
    private _sProducto: ProductoService,
    private _sVenta: VentasService,
    public _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.nVenta.fecha = this.fecha;

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
      let ganancia: number = element.preciove - element.precioco;
      let ventDetalleProd = new VentaDetalle(1,element,0,0,ganancia,element.codproducto,element.preciove,element.preciove,element.preciove,"Unidad" );
      this.nVentaDetalle.push(ventDetalleProd);
      console.log(this.nVentaDetalle);
    });

    this.tabla1.renderRows();
    this.nombresProductos = [];
    this.listTransicion = [];
    this.nVenta.ventadetalle=this.nVentaDetalle;
    this.getTotalCost();
  }
  getTotalCost() {
    this.nVenta.totcompra = 0;
    this.nVenta.descuento = 0;
    this.nVenta.ganancia = 0;
    this.nVenta.totventa = 0;
    this.nVentaDetalle.map((t) => {
      this.nVenta.totcompra += t.cantidad*t.prevesdind;
      this.nVenta.descuento += t.desctotal;
      this.nVenta.ganancia += t.ganancia;
    });
    this.nVenta.totcompra = parseFloat(this.intlRound(this.nVenta.totcompra));
    this.nVenta.descuento = parseFloat(this.intlRound(this.nVenta.descuento));
    this.nVenta.ganancia = parseFloat(this.intlRound(this.nVenta.ganancia));
    this.nVenta.totventa = parseFloat(
      this.intlRound(this.nVenta.totcompra - this.nVenta.descuento)
    );
  }
  somethingChanged(id) {
    this.nVentaDetalle.filter((producto) => {
      if (producto.codproducto.codproducto == id) {
        producto.subtotal = producto.cantidad * producto.codproducto.preciove;
        producto.subtotal = parseFloat(this.intlRound(producto.subtotal));
      }
    })[0];
    this.getTotalCost();
  }
  addVisible(listaProductos: Array<Producto>) {
    listaProductos.forEach((element) => {
      Object.defineProperty(element, "visible", {
        value: true,
        writable: true,
        enumerable: true,
        configurable: true,
      });
    });
  }
  quitarProduct(id) {
    let cont = 0;
    for (let el of this.nVentaDetalle) {
      if (el.codproducto.codproducto === id) {
        this.nVentaDetalle.splice(cont, 1);
        this.tabla1.renderRows();
        for (let i of this.productos) {
          if (i.codproducto == el.codproducto.codproducto) {
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

  intlRound(numero, decimales = 2, usarComa = false) {
    let opciones = {
      maximumFractionDigits: decimales,
      useGrouping: false,
    };
    return new Intl.NumberFormat(usarComa ? "es" : "en", opciones).format(
      numero
    );
  }
  deleteList() {
    this.nVentaDetalle = [];
    this.nVenta.ventadetalle=[];
    this.productos.forEach((element) => {
      element.visible = true;
    });
    this.getTotalCost();
  }
  openDialog(id) {
    let producto: VentaDetalle = this.nVentaDetalle.filter(
      (element) => element.idventadetalle == id
    )[0];
    const dialogRef = this._dialog.open(ProductDialogComponent, {
      width: "500px",
      data: producto,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (producto.cantidad < 1) {
        producto.cantidad = 1;
        producto.subtotal = producto.prevesdind;
      }
      if (result === true) {
      }
      this.getTotalCost();
    });
  }
  onSubmit() {
    console.log(this.nVenta);

    this._sVenta.registrarVenta(this.nVenta).subscribe(
      (data) => {
        console.log("listo");
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

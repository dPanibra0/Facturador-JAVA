import { Component, OnInit, ViewChild } from '@angular/core';
import { Producto } from '@models/producto.model';
import { ProductoService } from '@services/producto.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.scss'],
})
export class ListProductoComponent implements OnInit {
  displayedColumns: string[] = [
    'codproducto',
    'codbarra',
    'producto',
    'detalles',
    'marca',
    'unimedida',
    'categoria',
    'iddistrib',
    'cantidad',
    'preciove',
    'precioco',
    'ptjganancia',
  ];
  dataSource: MatTableDataSource<Producto>;
  productos: Array<Producto>;
  load = true;
  dvoid = false;
  private paginator: MatPaginator;
  private sort: MatSort;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if (this.paginator && this.sort) {
      this.applyFilter(event);
    }
  }

  constructor(private _dServices: ProductoService) {}

  ngOnInit(): void {
    this._dServices.getProductos().subscribe(
      (data: Array<Producto>) => {
        console.log(data);
        this.load = false;
        if (data.length == 0) {
          this.dvoid = true;
        } else {
          this.productos = data;          
          this.matTable(this.productos);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
  matTable(listClientes: Array<Producto>) {
    this.dataSource = new MatTableDataSource(listClientes);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

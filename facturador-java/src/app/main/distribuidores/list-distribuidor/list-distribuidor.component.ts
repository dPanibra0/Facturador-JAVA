import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DistribuidorService } from '@services/distribuidor.service';
import { Distribuidor } from '@models/distribuidor.model';

@Component({
  selector: 'app-list-distribuidor',
  templateUrl: './list-distribuidor.component.html',
  styleUrls: ['./list-distribuidor.component.scss'],
})
export class ListDistribuidorComponent implements OnInit {
  displayedColumns: string[] = [
    'iddistrib',
    'nombre',
    'tipodoc',
    'nrodoc',
    'direccion',
    'telefono',
    'correo',
    'perscontact'
  ];
  dataSource: MatTableDataSource<Distribuidor>;
  distribuidores: Array<Distribuidor>;
  load=true;
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

  constructor(private _dServices: DistribuidorService) {}

  ngOnInit(): void {
    this._dServices.getDistribuidores().subscribe(
      (data: Array<Distribuidor>) => {
        console.log(data.length);
        this.load=false;
        if (data.length == 0) {
          this.dvoid = true;
        } else {
          this.distribuidores = data;
          this.matTable(this.distribuidores);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
  matTable(listClientes: Array<Distribuidor>) {
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

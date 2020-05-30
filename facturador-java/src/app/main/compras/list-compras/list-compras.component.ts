import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ComprasService } from '@services/compras.services';
import { Compra } from '@models/Compra.model';

@Component({
  selector: 'app-list-compras',
  templateUrl: './list-compras.component.html',
  styleUrls: ['./list-compras.component.scss']
})
export class ListComprasComponent implements OnInit {
  displayedColumns: string[] = [
    'idcompra',
    'nroserie',
    'iddistrib',
    'nota',
    'fechaemision',
    'fechavencimiento',
    'tot',
    'saldo',
  ];
  dataSource: MatTableDataSource<Compra>;
  compras: Array<Compra>;
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

  constructor(private _sCompras: ComprasService) {}

  ngOnInit(): void {
    this._sCompras.getCompras().subscribe(
      (data) => {
        console.log(data.content);
        let trueData=data.content;
        this.load=false;
        if (trueData.length == 0) {
          this.dvoid = true;
        } else {
          this.compras = trueData;
          this.matTable(this.compras);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
  matTable(listClientes: Array<Compra>) {
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

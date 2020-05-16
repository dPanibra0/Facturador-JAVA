import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteService } from '@services/cliente.service';
import { Cliente } from '@models/cliente.model';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.scss'],
})
export class ListClienteComponent implements OnInit {
  displayedColumns: string[] = ['id','nombre','tipodoc','nrodoc','direccion','telefono','correo'];
  dataSource: MatTableDataSource<Cliente>;
  clientes: Array<Cliente>;
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

  constructor(private _cService: ClienteService) {
    
  }

  ngOnInit(): void {
    this._cService.getClientes().subscribe(
      (data) => {
        this.clientes = data;
        console.log(this.clientes);
        this.matTable(this.clientes);
        
      },
      (error) => {
        console.error(error);
      }
    );
  }
  matTable(listClientes:Array<Cliente>) {
    this.dataSource = new MatTableDataSource(listClientes);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator
}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

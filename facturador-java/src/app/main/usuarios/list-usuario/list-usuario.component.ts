  import { Component, OnInit, ViewChild } from '@angular/core';
  import { MatPaginator } from '@angular/material/paginator';
  import { MatSort } from '@angular/material/sort';
  import { MatTableDataSource } from '@angular/material/table';
  import { UsuarioService } from '@services/usuario.service';
  import { Usuario } from '@models/usuario.model';
  
  @Component({
    selector: 'app-list-usuario',
    templateUrl: './list-usuario.component.html',
    styleUrls: ['./list-usuario.component.scss']
  })
  export class ListUsuarioComponent implements OnInit {
    displayedColumns: string[] = [
      'idusuario',
      'nombre',
      'usuario',
      'tipo'
    ];
    dataSource: MatTableDataSource<Usuario>;
    usuarios: Array<Usuario>;
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
  
    constructor(private _sUsuario: UsuarioService) {}
  
    ngOnInit(): void {
      this._sUsuario.getUsuarios().subscribe(
        (data: Array<Usuario>) => {
          console.log(data);
          this.load=false;
          if (data.length == 0) {
            this.dvoid = true;
          } else {
            this.usuarios = data;
            this.matTable(this.usuarios);
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }
    matTable(listClientes: Array<Usuario>) {
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
  
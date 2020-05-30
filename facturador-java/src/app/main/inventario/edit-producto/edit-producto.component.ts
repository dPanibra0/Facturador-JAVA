import { Component, OnInit } from '@angular/core';
import { Producto } from '@models/producto.model';
import { ProductoService } from '@services/producto.service';
import { Distribuidor } from '@models/distribuidor.model';
import { DistribuidorService } from '@services/distribuidor.service';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { DeleteDialogComponent } from './../../components/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.scss'],
})
export class EditProductoComponent implements OnInit {
  nProducto = new Producto(
    0,
    'General',
    null,
    null,
    null,
    null,
    'General',
    '',
    'General',
    '',
    1,
    '',
    0,
    'General',
    'General',
    '',
    null,
    null,
    null,
    null,
    '',
    '',
    '',
    null,
    'Kilogramo'
  );
  myForm: FormGroup;
  medidas: string[] = [
    'Kilogramo',
    'Gramo',
    'Miligramo',
    'Litro',
    'Mililitro',
    'Onza',
    'Galón',
    'Libra',
    'Metro',
    'Centímetro',
    'Milimetro',
    'Pulgada',
    'Pie',
  ];
  categorias: string[] = [
    'General',
    'Nuevo',
    'Estrella',
    'Seguidores',
    'Apoyo',
    'Temporada',
    'A la baja',
  ];
  distr = false;
  distribuidores: Array<Distribuidor>;
  icon = true;
  disableBtn = false;
  loading = false;
  succes = false;
  nimedida = 'RUC';
  course: any;
  
  disableEdit = false;
  distribuidor = false;
  disableInput=true;

  editing = false;

  constructor(
    private _sProducto: ProductoService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private _sDistribuidor: DistribuidorService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.myForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
    });
    this.route.params.subscribe((params) => {
      this.course = params.id;
      this.getProductoByID(this.course);
    });
  }

  ngOnInit(): void {
    this._sDistribuidor.getDistribuidores().subscribe(
      (data: Array<Distribuidor>) => {
        this.distribuidores = data;
        this.distr = true;
        console.log(data);
      },
      (error) => {}
    );
    // this.nProducto.unimedida='RUC'
    // this.tipodocFormControl.setValue('RUC');
    console.log(this.nProducto);
  }
  getProductoByID(id) {
    this._sProducto.getProductoById(id).subscribe(
      (data:Producto) => {
        this.nProducto=Object.assign(data);
        console.log(this.nProducto);
        
      },
      (error) => {}
    );
  }
  onSubmit() {
    this.nProducto.producto = this.myForm.get('nombre').value;
    if (this.myForm.valid) {
      this.registrarProducto(this.nProducto);
      this.disableAll();
      this.loading = true;
    }
    console.log(this.myForm.valid);
    console.log(this.nProducto);
  }
  disableAll(): void {
    this.icon = false;
    this.disableBtn = true;
    this.disableInput =true;
    this.myForm.disable();
  }
  registrarProducto(newProducto: Producto): void {
    this._sProducto.registrarProducto(newProducto).subscribe(
      (data) => {
        console.log(data);
        if (data.message == 'Success') {
          this.loading = false;
          this.succes = true;
          this.openSnackBar();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  openSnackBar() {
    let config = new MatSnackBarConfig();
    config.duration = 5000;
    config.panelClass = ['success-snackbar'];
    config.horizontalPosition = 'right';
    config.verticalPosition = 'bottom';

    this._snackBar.open(
      `Producto ${this.nProducto.producto} ha sido editado exitosamente`,
      'x',
      config
    );
    setTimeout(() => {
      this.router.navigate(['/main/inventario']);
    }, 500);
  }
  editOn() {
    this.icon = true;
    this.editing = true;
    this.disableBtn = false;
    this.disableInput=false;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '400px',
      data: { type: 'Producto', name: this.nProducto.producto },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.deleteProducto(this.nProducto.codproducto);
      }
    });
  }
  deleteProducto(idDistribuidor: number): void {
    this._sProducto.deleteProducto(idDistribuidor).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/main/invetario']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

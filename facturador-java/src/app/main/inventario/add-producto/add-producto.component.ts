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
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.scss'],
})
export class AddProductoComponent implements OnInit {
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

  constructor(
    private _dServices: ProductoService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private _sDistribuidor: DistribuidorService
  ) {
    this.myForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
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
    this.myForm.disable();
  }
  registrarProducto(newProducto: Producto): void {
    this._dServices.registrarProducto(newProducto).subscribe(
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
      `Producto ${this.nProducto.producto} ha sido registrado exitosamente`,
      'x',
      config
    );
    setTimeout(() => {
      this.router.navigate(['/main/inventario']);
    }, 500);
  }
}

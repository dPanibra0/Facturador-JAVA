import { Component, OnInit } from '@angular/core';
import { Cliente } from '@models/cliente.model';
import { ClienteService } from '@services/cliente.service';
@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.scss'],
})
export class AddClienteComponent implements OnInit {
  nCliente = new Cliente(0, '', '', '', '', 0, '', '');
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  c = this.nCliente.$tipodoc;
  value = '';
  direccion = '';
  correo = '';
  telefono = '';

  constructor(private _cService: ClienteService) {}

  enviar() {
    console.log(this.nCliente.$nombre);
    console.log(this.nCliente.$tipodoc);
    // this._cService.registrarCliente(this.nCliente).subscribe(
    //   (data) => {},
    //   (error) => {}
    // );
  }
  ngOnInit(): void {}
}

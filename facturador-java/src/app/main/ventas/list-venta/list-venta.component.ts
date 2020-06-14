import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Venta } from '@models/venta.model';
import { VentaDetalle } from '@models/ventaDetalle.model';
import { VentasService } from '@services/venta.service';
@Component({
  selector: 'app-list-venta',
  templateUrl: './list-venta.component.html',
  styleUrls: ['./list-venta.component.scss'],
})
export class ListVentaComponent implements OnInit {
  ventas: Array<Venta>;
  suscr: Subscription;

  constructor(private _sVenta: VentasService) {}

  ngOnInit(): void {
    this.suscr = this._sVenta.getVentas().subscribe(
      (data) => {
        // this.ventas=data;
        console.log(data);
        
      },
      (error) => {}
    );
  }
  ngOnDestroy(): void {
   this.suscr.unsubscribe();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venta } from '@models/venta.model';
@Injectable({
  providedIn: 'root',
})
export class VentasService {

  constructor(private http: HttpClient) {}

  getVentas(): Observable<any> {
      return this.http.get<any>('/ventas/listarVentas');
  }
  registrarVenta(nuevaVenta: Venta): Observable<any> {
    return this.http.post<any>('/ventas', nuevaVenta);
  }  
//   getVentasById(idVentas: number): Observable<Venta> {
//     return this.http.get<any>(`/Ventass/${idVentas}`);
//   }
//   editVentas(Ventas: Venta): Observable<any> {
//     return this.http.put<any>('/Ventass', Ventas);
//   }
//   deleteVentas(idVentas: number): Observable<any> {
//     return this.http.delete<any>(`/Ventass/${idVentas}`);
//   }
}

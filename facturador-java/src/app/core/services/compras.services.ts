import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Compra } from '@models/compra.model';
@Injectable({
  providedIn: 'root',
})
export class ComprasService {

  constructor(private http: HttpClient) {}

  getCompras(): Observable<any> {
      return this.http.get<any>('/compras/listarCompras');
  }
  registrarCompras(nuevoCompras: Compra): Observable<any> {
    return this.http.post<any>('/compras', nuevoCompras);
  }  
//   getComprasById(idCompras: number): Observable<Compra> {
//     return this.http.get<any>(`/Comprass/${idCompras}`);
//   }
//   editCompras(Compras: Compra): Observable<any> {
//     return this.http.put<any>('/Comprass', Compras);
//   }
//   deleteCompras(idCompras: number): Observable<any> {
//     return this.http.delete<any>(`/Comprass/${idCompras}`);
//   }
}

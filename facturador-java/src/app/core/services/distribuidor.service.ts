import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Distribuidor } from '@models/distribuidor.model';
@Injectable({
  providedIn: 'root',
})
export class DistribuidorService {
  constructor(private http: HttpClient) {}

  registrarDistribuidor(nuevoDistribuidor: Distribuidor): Observable<any> {
    return this.http.post<any>('/distribuidores', nuevoDistribuidor);
  }
  getDistribuidores(): Observable<Array<Distribuidor>> {
    return this.http.get<Array<Distribuidor>>('/distribuidores');
  }
  getDistribuidorById(idDistribuidor: number): Observable<Distribuidor> {
    return this.http.get<any>(`/distribuidores/${idDistribuidor}`);
  }
  editDistribuidor(Distribuidor: Distribuidor): Observable<any> {
    return this.http.put<any>('/distribuidores', Distribuidor);
  }
  deleteDistribuidor(idDistribuidor: number): Observable<any> {
    return this.http.delete<any>(`/distribuidores/${idDistribuidor}`);
  }
}

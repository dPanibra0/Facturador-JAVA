import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configuracion } from '@models/configuracion.model';
@Injectable({
  providedIn: 'root',
})
export class ConfiguracionService {
  constructor(private http: HttpClient) {}

  registrarconfiguracion(nuevaConfiguracion: Configuracion): Observable<any> {
    return this.http.post<any>('/configuraciones', nuevaConfiguracion);
  }
  getConfiguraciones(): Observable<Array<Configuracion>> {
    return this.http.get<Array<Configuracion>>('/configuraciones');
  }
  getconfiguracionById(idconfiguracion: number): Observable<Configuracion> {
    return this.http.get<any>(`/configuraciones/${idconfiguracion}`);
  }
  editconfiguracion(configuracion: Configuracion): Observable<any> {
    return this.http.put<any>('/configuraciones', configuracion);
  }
}

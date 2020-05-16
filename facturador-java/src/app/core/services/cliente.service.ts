import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente} from '@models/cliente.model'
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  registrarCliente(nuevoCliente:Cliente): Observable<any>{
    return this.http.post<any>('/clientes', nuevoCliente);
  }
  getClientes(): Observable<any>{
    return this.http.get<any>('/clientes');

  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Cliente } from '@models/cliente.model';
@Injectable({
  providedIn: 'root',
})
export class ClienteService {

  constructor(private http: HttpClient) {}

  getClientes(): Observable<any> {
      return this.http.get<Array<Cliente>>('/clientes');
  }
  registrarCliente(nuevoCliente: Cliente): Observable<any> {
    return this.http.post<any>('/clientes', nuevoCliente);
  }  
  getClienteById(idCliente: number): Observable<Cliente> {
    return this.http.get<any>(`/clientes/${idCliente}`);
  }
  editCliente(cliente: Cliente): Observable<any> {
    return this.http.put<any>('/clientes', cliente);
  }
  deleteCliente(idCliente: number): Observable<any> {
    return this.http.delete<any>(`/clientes/${idCliente}`);
  }
}

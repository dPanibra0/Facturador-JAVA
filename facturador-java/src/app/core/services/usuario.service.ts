import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '@models/usuario.model';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  registrarUsuario(nuevoUsuario: Usuario): Observable<any> {
    return this.http.post<any>('/usuarios', nuevoUsuario);
  }
  getUsuarios(): Observable<any> {
    return this.http.get<Array<Usuario>>('/usuarios');
  }
  getUsuarioById(idUsuario: number): Observable<Usuario> {
    return this.http.get<any>(`/usuarios/${idUsuario}`);
  }
  editUsuario(Usuario: Usuario): Observable<any> {
    return this.http.put<any>('/usuarios', Usuario);
  }
  deleteUsuario(idUsuario: number): Observable<any> {
    return this.http.delete<any>(`/usuarios/${idUsuario}`);
  }
}

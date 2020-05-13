import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceasd {
  constructor(private http: HttpClient) {}

  login(Username: String, Password: String): Observable<any> {
    let cadena = btoa('sistemas@bytexbyte.com.pe:slacksistemas');
    const body = `grant_type=password&username=${Username}&password=${Password}`;
    return this.http.post<any>('/oauth/token', body, {
      headers: new HttpHeaders()
        .set('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8')
        .set('Authorization', 'Basic ' + cadena),
    });
  }
  
}

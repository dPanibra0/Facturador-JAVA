import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userData;

  constructor(
    private http: HttpClient,
    private cookies: CookieService,
    private _route: Router
  ) {}

  login(Username: string, Password: string): Observable<any> {
    let cadena = btoa('sistemas@bytexbyte.com.pe:slacksistemas');
    const body = `grant_type=password&username=${Username}&password=${Password}`;
    return this.http.post<any>('/oauth/token', body, {
      headers: new HttpHeaders()
        .set('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8')
        .set('Authorization', 'Basic ' + cadena),
    });
  }
  logout(): void {
    this.cookies.deleteAll();
    this._route.navigate(['/login']);
  }

  setToken(token: string) {
    this.userData = this.parseJwt(token);
    console.log(this.userData);

    this.cookies.set('token', token);
  }

  getToken() {
    return this.cookies.get('token');
  }

  isLoged(): boolean {
    if (this.getToken()) {
      return true;
    } else {
      this.userData = {};
      return false;
    }
  }

  isAdmin(): boolean {
    if (this.userData.authorities[0] == '0') {
      return true;
    } else {
      return false;
    }
  }

  getDataToken(): object {
    return this.userData;
  }

  parseJwt(token): any {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  }
}

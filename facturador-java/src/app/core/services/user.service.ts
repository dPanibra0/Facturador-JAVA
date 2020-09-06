import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class UserService {
  userData: any = {};
  private isLogin: boolean = false;
  constructor(
    private http: HttpClient,
    private cookies: CookieService,
    private _route: Router
  ) {}

  login(Username: string, Password: string): Observable<any> {
    let cadena = btoa("sistemas@bytexbyte.com.pe:slacksistemas");
    const body = `grant_type=password&username=${Username}&password=${Password}`;
    return this.http.post<any>("/oauth/token", body, {
      headers: new HttpHeaders()
        .set("Content-type", "application/x-www-form-urlencoded; charset=UTF-8")
        .set("Authorization", "Basic " + cadena),
    });
  }
  logout(): void {
    let deleteCookies = new Promise((resolve, reject) => {
      this.cookies.deleteAll();
      this.cookies.delete("token");
      this.userData = {};
      console.log(this.getToken());

      resolve("¡Éxito!");
    });

    deleteCookies.then((data) => {
      this._route.navigate(["/login"]);
      console.log("¡Sí! " + data);
      console.log(this.getToken());
    });
  }

  setToken(token: string) {
    this.parseJwt(token);
    console.log("setToken", this.userData);
    this.cookies.set("token", token);
  }

  getToken() {
    return this.cookies.get("token");
  }

  isLoged(): boolean {
    let tok = this.getToken();

    if (tok) {
      this.parseJwt(tok);
      return this.refresTok();
    } else {
      return false;
    }
  }

  isAdmin(): boolean {
    console.log(this.userData);

    if (this.userData.authorities[0] == "0") {
      console.log("admin");

      return true;
    } else {
      console.log("no admin");
      return false;
    }
  }

  getDataToken(): object {
    return this.userData;
  }
  refresTok():boolean {
      const tokenExp = this.userData.exp;

      if (
        tokenExp === undefined ||
        this.userData.exp < new Date().getTime() / 1000
      ) {
        console.log('token muerto');
        
        this.logout()
        return false
      } else {
        console.log('token activo');
        
        return true
      }
  }

  parseJwt(token): void {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    this.userData = JSON.parse(jsonPayload);
  }
}
class Token {
  aud: Array<string>;
  authorities: Array<string>;
  client_id: string;
  exp: number;
  jti: string;
  scope: Array<string>;
  user_name: string;
}

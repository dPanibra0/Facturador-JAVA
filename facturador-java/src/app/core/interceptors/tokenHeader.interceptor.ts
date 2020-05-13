import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpRequest,
  HttpInterceptor,
  HttpHeaders,
  HttpEvent,
} from '@angular/common/http';
import { UserService } from './../services/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenHeaderInterceptor implements HttpInterceptor {
  constructor(private _userServices: UserService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    if(this._userServices.isLoged()){
        req = this.addToken(req);
        return next.handle(req);
    }
    return next.handle(req);
  }

  private addToken(request: HttpRequest<any>) {
    const token = this._userServices.getToken();
    const Authorization=`Bearer  ${token}`
    if (token) {
    
      request = request.clone({
        setHeaders: {
          Authorization
        },
      });
      return request;
    }
    return request;
  }
}

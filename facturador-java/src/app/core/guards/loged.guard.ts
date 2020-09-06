import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { UserService} from './../services/user.service'
@Injectable({
  providedIn: 'root'
})
export class LogedGuard implements CanActivate {
  constructor( private router: Router, private _userServices:UserService)
  {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this._userServices.isLoged()===true){
        console.log('is true?');
        
        return true;
      }
      else{
        console.log('nonono login');
        
        return this.router.parseUrl("/login");
      }
  }
  
}

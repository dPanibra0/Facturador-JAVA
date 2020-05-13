import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { UserService } from './../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private _snackBar: MatSnackBar,
    private userServices: UserService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.userServices.isAdmin()) {
      return true;
    } else {
      let config = new MatSnackBarConfig();
      config.duration = 5000;
      config.panelClass = ['error-snackbar'];
      config.horizontalPosition = 'right';
      config.verticalPosition = 'bottom';

      this._snackBar.open('Solo administradores', 'x', config);
    }
  }
}

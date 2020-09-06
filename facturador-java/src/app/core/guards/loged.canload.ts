import { Injectable } from "@angular/core";
import { CanLoad, Route, Router } from "@angular/router";
import { UserService } from "./../services/user.service";

@Injectable()
export class LogedCanload implements CanLoad {
  constructor(private router: Router, private _userServices: UserService) {}

  canLoad(route: Route): boolean {
    if (this._userServices.isLoged() === true) {
      console.log("si login");

      return true;
    } else {
      console.log("no login");
      this.router.navigate(['/login']);
      return false; 
    }
  }
}

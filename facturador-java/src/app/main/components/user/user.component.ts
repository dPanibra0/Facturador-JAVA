import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private router: Router, private cookies:CookieService) { }

  ngOnInit(): void {
  }
  logout(){
    this.cookies.delete("token");
    localStorage.removeItem('type');
    this.router.navigate(['login']);
    
  }

}

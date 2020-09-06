import { Component, OnInit } from "@angular/core";
import { UserService } from "@services/user.service";
import { MatDialog } from "@angular/material/dialog";
import { UserDialogComponent } from "./../user-dialog/user-dialog.component";
import { UsuarioService } from "@services/usuario.service";
import { Usuario } from "@models/usuario.model";
import { AngularFireDatabase } from "@angular/fire/database";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  imagePath = "https://cdn.onlinewebfonts.com/svg/img_184513.png";
  userMail: string;
  user: Usuario;
  firstName: string = "";
  constructor(
    private _userService: UserService,
    public _dialog: MatDialog,
    private _sUsuario: UsuarioService,
    private _dataBase: AngularFireDatabase
  ) {
    this.userMail = this._userService.userData.user_name;
  }

  ngOnInit(): void {
    this.getUrl(this.userMail);
    this._sUsuario.getUsuarios().subscribe(
      (data: Usuario[]) => {
        this.userMail = this._userService.userData.user_name;
        data.forEach((element) => {
          if (element.usuario == this.userMail) {
            this.user = element;
            this.firstName = element.nombre.substring(
              0,
              element.nombre.indexOf(" ")
            );
          }
        });
      },
      (error) => {}
    );
  }
  getUrl(email: string) {
    const firstName = email.substring(0, email.indexOf("@"));
    this._dataBase
      .object(`usuarios/${firstName}`)
      .valueChanges()
      .subscribe((data: any) => {
        this.imagePath = data.imgURL;
      });
  }
  logout() {
    this._userService.logout();
  }
  openDialog() {
    const dialogRef = this._dialog.open(UserDialogComponent, {
      width: "400px",
      data: { user: this.user, img: this.imagePath },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == "true") {
        this.getUrl(this.userMail);
      }
    });
  }
}

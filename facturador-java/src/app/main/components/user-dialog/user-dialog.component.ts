import {
  Component,
  OnInit,
  Inject,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFireDatabase } from "@angular/fire/database";

@Component({
  selector: "app-user-dialog",
  templateUrl: "./user-dialog.component.html",
  styleUrls: ["./user-dialog.component.scss"],
})
export class UserDialogComponent implements OnInit {
  // @ViewChild('fileInput') fileInput: ElementRef;
  @ViewChild("fileInput", { static: true, read: ElementRef })
  fileInput: ElementRef;
  tipo: string = "";
  file: any;
  disableBtn: boolean = false;
//button states
save:boolean=true;
loading:boolean=false;
succes:boolean=false;


  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    public deleteElement: MatDialogRef<UserDialogComponent>,
    private _storage: AngularFireStorage,
    private _dataBase: AngularFireDatabase,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.data.user.tipo == 0) {
      this.tipo = "Admin";
    } else {
      this.tipo = "Usuario";
    }
    let user = this.data.user;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  readURL(event): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => (this.data.img = reader.result);
      reader.readAsDataURL(file);
      this.file = file;
    }
  }
  pressBtn() {
    this.fileInput.nativeElement.click();
  }
  uploadIMG() {
    this.disableBtn = true;
    this.save=false;
    this.loading=true;
    const filePath = `bxb-img/${this.data.user.usuario}`;
    this._storage.ref(filePath);
    this._storage.upload(filePath, this.file).then((element) => {
      element.ref.getDownloadURL().then((i) => {
        this.registerURL(i);
      });
    });
  }
  registerURL(url: string) {
    const userMail = this.data.user.usuario;
    const firstName=userMail.substring(0,userMail.indexOf('@'));
    this._dataBase
      .object(`usuarios/${firstName}`)
      .update({ email: userMail, imgURL: url })
      .then((response) => {
        this.loading=false;
        this.succes=true;
        setTimeout(() => {
          this.dialogRef.close('true');
        }, 2000);
      });
  }
}

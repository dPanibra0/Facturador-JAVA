import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { LoginComponent } from "./login/login.component";
import { PoweredBxBComponent } from "./powered-bxb/powered-bxb.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { BaseURLInterceptor } from "./core/interceptors/baseURL.inteceptor";
import { HttpErrorInterceptor } from "./core/interceptors/HttpError.interceptor";
import { TokenHeaderInterceptor } from "./core/interceptors/tokenHeader.interceptor";

import { MaterialModule } from "./material.module";

import { CookieService } from "ngx-cookie-service";

import { LogedCanload } from "./core/guards/loged.canload";

import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireStorageModule} from '@angular/fire/storage'
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PoweredBxBComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, "bxb-java"),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [
    CookieService,
    LogedCanload,
    { provide: HTTP_INTERCEPTORS, useClass: BaseURLInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenHeaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

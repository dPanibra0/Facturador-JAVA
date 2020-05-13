import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { PoweredBxBComponent } from './powered-bxb/powered-bxb.component';
import { LoadScreenComponent } from './load-screen/load-screen.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BaseURLInterceptor } from './core/interceptors/baseURL.inteceptor';
import { HttpErrorInterceptor } from './core/interceptors/HttpError.interceptor';
import { TokenHeaderInterceptor} from './core/interceptors/tokenHeader.interceptor';

import { MaterialModule } from './material.module';

import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PoweredBxBComponent,
    LoadScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: BaseURLInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenHeaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

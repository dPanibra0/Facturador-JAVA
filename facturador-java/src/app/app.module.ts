import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { PoweredBxBComponent } from './powered-bxb/powered-bxb.component';
import { LoadScreenComponent } from './load-screen/load-screen.component';

import { MaterialModule} from './material.module';

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
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PoweredBxBComponent } from './components/powered-bxb/powered-bxb.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { MainComponent } from './main/main.component';
import { ContainerComponent } from './container/container.component';
import { QuickMenuComponent } from './components/quick-menu/quick-menu.component';
import { LoadScreenComponent } from './load-screen/load-screen.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, PoweredBxBComponent, SidebarMenuComponent, MainComponent, ContainerComponent, QuickMenuComponent, LoadScreenComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

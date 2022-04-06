import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AppRoutingModule } from '../app-routing.module';

import { AuthComponent } from './auth/auth.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { RealizedComponent } from './sales/realized/realized.component';
import { UnrealizedComponent } from './sales/unrealized/unrealized.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    AuthComponent,
    StockListComponent,
    RealizedComponent,
    UnrealizedComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ScrollingModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    AuthComponent,
    StockListComponent,
    RealizedComponent,
    UnrealizedComponent
  ]
})
export class PagesModule { }
